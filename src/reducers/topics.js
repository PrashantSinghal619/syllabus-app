import _ from 'lodash';
import { findItemIndex } from '../misc/helpers';

const initialState = {
	chapters: [],
}

const topics = (state = initialState, action) => {
	const chapters = [...state];
	switch (action.type) {
		case 'ADD_TOPIC':
			let chapterIndex = findItemIndex(chapters, action.chapterId);
			chapters[chapterIndex].topics = [...chapters[chapterIndex].topics, {
				id: action.id,
				name: action.text,
			}];
			return chapters;
		case 'EDIT_TOPIC':
			chapterIndex = findItemIndex(chapters, action.chapterId);
			let chapter = chapters[chapterIndex];
			let topicIndex = findItemIndex(chapter.topics, action.id);
			chapter.topics.topic = [...chapter.topics.topic, {name: action.text}];
			return chapters;
		case 'DELETE_TOPIC':
			chapterIndex = findItemIndex(chapters, action.chapterId);
			chapter = chapters[chapterIndex];
			const survivingTopics = [...chapter.topics];
			_.remove(survivingTopics, ['id', action.id]);
			chapter.topics = survivingTopics;
			return chapters;
		default:
			return state;
	}
}

export default topics;