import * as moment from 'moment';

/* Syllabus actions */

export const showSyllabus = (standard, subject) => ({
	type: 'SHOW_SYLLABUS',
	showSyllabus: true,
	standard,
	subject,
})

/* Chapter actions */

export const addChapter = (text, standard, subject) => ({
	type: 'ADD_CHAPTER',
	id: moment().format(),
	text,
	standard,
	subject,
})

export const editChapter = (id, text) => ({
	type: 'EDIT_CHAPTER',
	id,
	text,
})

export const deleteChapter = (id) => ({
	type: 'DELETE_CHAPTER',
	id,
})


/* Topic actions */

export const addTopic = (chapterId, text) => ({
	type: 'ADD_TOPIC',
	chapterId,
	id: moment().format(),
	text,
})

export const editTopic = (chapterId, id, text) => ({
	type: 'EDIT_TOPIC',
	chapterId,
	id,
	text,
})

export const deleteTopic = (chapterId, id) => ({
	type: 'DELETE_TOPIC',
	chapterId,
	id,
})

/* Modal actions */

export const showModal = (itemType, actionType, itemId, secondaryId) => ({
	type: 'SHOW_MODAL',
	showModal: true,
	itemType,
	actionType,
	itemId, // Preserves the id of the item being edited while modal is open
	secondaryId, // Serves as chapterId in case a topic is being edited
})

export const hideModal = () => ({
	type: 'HIDE_MODAL',
	showModal: false,
})
