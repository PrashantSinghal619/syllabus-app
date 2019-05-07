import React from 'react';
import PropTypes from 'prop-types';
import TopicList from './TopicList';
import TopicItem from './TopicItem';
import { deleteChapter, deleteTopic, showModal } from '../actions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import _ from 'lodash';

const ChapterItem = ({ chapter, chapterIndex, dispatch }) => {
	const handleDelete = (type, id, secondaryId) => {
		if (window.confirm("Are you sure you want to delete this item?")) {
			switch(type) {
				case 'chapter':
					dispatch(deleteChapter(id));
					break;
				case 'topic':
					// Supply chapterId in secondaryId and topicId in id
					dispatch(deleteTopic(secondaryId, id));
					break;
				default:
					break;
			}
		}
		else return;
	}

	return (
	  <tr className="syllabus-row">
	    <td className="chapter-item-column syllabus-column">
	      <div className="chapter-item-wrapper">
	        <span className="chapter-index">#{chapterIndex + 1}&nbsp;</span>
	        <span className="chapter-title" title={chapter.name}>{chapter.name}</span>
	        <span className="actions chapter-actions">
	          <Button
	            className="edit chapter-edit"
	            title="Edit chapter title"
	            onClick={() => dispatch(showModal('chapter', 'edit', chapter.id))}
	            variant="outline-light"
	            size="sm"
	          >
	          <i className="fa fa-pencil" aria-hidden="true"></i>
	          </Button>
	          <Button
	            className="delete chapter-delete"
	            title="Delete chapter"
	            onClick={() => handleDelete('chapter', chapter.id)}
	            variant="outline-danger"
	            size="sm"
	          >
	          <i className="fa fa-trash" aria-hidden="true"></i>
	          </Button>
	        </span>
	      </div>
	    </td>
	    <td className="topic-list-column syllabus-column">
				<TopicList className="topic-list">
					{_.map(chapter.topics, topic => (
						<TopicItem
							key={topic.id}
							name={topic.name}
							handleEdit={() => dispatch(showModal('topic', 'edit', topic.id, chapter.id))}
							handleDelete={() => handleDelete('topic', topic.id, chapter.id)}
						/>
					))}
				</TopicList>
				<Button
          className="topic-add"
          onClick={() => dispatch(showModal('topic', 'add', "", chapter.id))}
          variant="outline-success"
          size="sm"
        >
          Add Topic
        </Button>
	    </td>
	  </tr>
	);
}

ChapterItem.propTypes = {
	chapter: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		standard: PropTypes.string.isRequired,
		subject: PropTypes.string.isRequired,
		topics: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})),
	})
}

export default connect()(ChapterItem);