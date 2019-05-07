import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const TopicItem = ({ name, handleEdit, handleDelete }) => (
	<li className="topic-item">
		<div className="topic-item-wrapper">
			<span className="topic-name" title={name}>{name}</span>
			<span className="actions topic-actions">
				<Button
					className="edit edit-topic"
					title="Edit topic name"
					variant="outline-light"
					size="sm"
					onClick={() => handleEdit()}
				>
					<i className="fa fa-pencil" aria-hidden="true"></i>
				</Button>
				<Button
          className="delete topic-delete"
          title="Delete topic"
          variant="outline-danger"
          size="sm"
          onClick={() => handleDelete()}
        >
        	<i className="fa fa-trash" aria-hidden="true"></i>
        </Button>
			</span>
		</div>
	</li>
)


TopicItem.propTypes = {
	name: PropTypes.string.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
}

export default TopicItem;