import React from 'react';
import { connect } from 'react-redux';
import { addChapter, editChapter, addTopic, editTopic, hideModal } from '../actions';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { findItemIndex } from '../misc/helpers';

const ModalWrapper = ({showModal, itemType, actionType, itemId, secondaryId, standard, subject, currentValue, dispatch}) => {
  const partialTitle = (actionType === "add") ? "Add a " : "Edit ";
  const buttonText = (actionType === "add") ? "Add" : "Save";
  let input;
	
	function handleSubmit(e) {
		e.preventDefault();
		if (!input.value.trim()) {
			return;
		}
		if (itemType === "chapter" && actionType === "add") {
			dispatch(addChapter(input.value, standard, subject));
		}
		else if (itemType === "chapter" && actionType === "edit") {
			dispatch(editChapter(itemId, input.value));
		}
		else if (itemType === "topic" && actionType === "add") {
			dispatch(addTopic(secondaryId, input.value));
		}
		else if (itemType === "topic" && actionType === "edit") {
			dispatch(editTopic(secondaryId, itemId, input.value));
		}

		dispatch(hideModal());
	}

  return (
    <Modal
      show={showModal}
      onHide={() => dispatch(hideModal())}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{partialTitle}{itemType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control placeholder="Start typing here..." ref={node => input = node} defaultValue={currentValue} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          {buttonText}
        </Button>
        <Button variant="secondary" onClick={() => dispatch(hideModal())}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
	let currentValue = "";
	if (state.modal.itemType === "chapter" && state.modal.itemId) {
		const chapterIndex = findItemIndex(state.chapters, state.modal.itemId);
		const chapter = state.chapters[chapterIndex];
		currentValue = chapter.name;
	}
	else if (state.modal.itemType === "topic" && state.modal.itemId && state.modal.secondaryId) {
		const chapterIndex = findItemIndex(state.chapters, state.modal.secondaryId);
		const chapter = state.chapters[chapterIndex];
		const topicIndex = findItemIndex(chapter.topics, state.modal.itemId);
		if (topicIndex !== -1) {
			const topic = chapter.topics[topicIndex];
			currentValue = topic.name;
		}
	}
	return {
		showModal: state.modal.showModal,
		itemType: state.modal.itemType,
		actionType: state.modal.actionType,
		itemId: state.modal.itemId,
		secondaryId: state.modal.secondaryId,
		standard: state.syllabus.standard,
		subject: state.syllabus.subject,
		currentValue: currentValue,
	}
}

ModalWrapper.propTypes = {
	showModal: PropTypes.bool.isRequired,
	itemType: PropTypes.string.isRequired,
	actionType: PropTypes.string.isRequired,
	itemId: PropTypes.string,
	secondaryId: PropTypes.string,
	standard: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	currentValue: PropTypes.string,
}

export default connect(mapStateToProps)(ModalWrapper);