import React from 'react';
import _ from 'lodash';
import ChapterList from '../components/ChapterList';
import ChapterItem from '../components/ChapterItem';
import PropTypes from 'prop-types';
import { showModal } from '../actions';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const SyllabusTable = ({ chapters, dispatch }) => (
	<Table className="syllabus-container"
				 striped
				 bordered
				 hover
				 responsive
				 variant="dark">
		<thead>
		  <tr>
		    <th className="chapter-list-heading">
		      <div className="chapter-list-heading-wrapper">
		        Chapters
		      </div>
		      <Button
		        className="chapter-add"
		        onClick={() => dispatch(showModal('chapter', 'add'))}
		        variant="outline-success"
		        size="sm"
		      >
		        Add Chapter
		      </Button>
		    </th>
		    <th className="topic-list-heading">
		      <div className="topic-list-heading-wrapper">Topics</div>
		    </th>
		  </tr>
		</thead>
		<ChapterList>
			{_.map(chapters, (chapter, index) => (
				<ChapterItem
					key={chapter.id}
          chapter={chapter}
          chapterIndex={index}
        />
      ))}
		</ChapterList>
	</Table>
)

const mapStateToProps = (state) => ({
	chapters: _.filter(state.chapters, {'standard': state.syllabus.standard, 'subject': state.syllabus.subject}),
})

SyllabusTable.propTypes = {
	chapters: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		standard: PropTypes.string.isRequired,
		subject: PropTypes.string.isRequired,
		topics: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})),
	})).isRequired,
}

export default connect(mapStateToProps)(SyllabusTable);