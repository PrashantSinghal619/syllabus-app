import _ from 'lodash';
import { findItemIndex } from '../misc/helpers';

const chapters = (state = [], action) => {
	let chapters = [...state];
	switch (action.type) {
		case 'ADD_CHAPTER':
			return [
				...chapters,
				{
					id: action.id,
					name: action.text,
					standard: action.standard,
					subject: action.subject,
					topics: [],
				}
			];

		case 'EDIT_CHAPTER':
			return _.map(chapters, (chapter) => 
				(chapter.id === action.id) ?
					{...chapter, name: action.text} :
					chapter
			);
		case 'DELETE_CHAPTER':
			_.remove(chapters, ['id', action.id]);
			return chapters;

		case 'ADD_TOPIC': {
			const index = findItemIndex(chapters, action.chapterId);
			if (index !== -1)
				chapters[index].topics = [...chapters[index].topics, {id: action.id, name: action.text}];
			return _.cloneDeep(chapters);
		}

		case 'EDIT_TOPIC': {
			const chapterIndex = findItemIndex(chapters, action.chapterId);
			const chapter = chapters[chapterIndex];
			const topics = chapter.topics;
			const topicIndex = findItemIndex(topics, action.id);
			topics[topicIndex].name = action.text;
			chapter.topics = topics;

			return _.cloneDeep(chapters);
		}

		case 'DELETE_TOPIC':
			let chapterIndex = findItemIndex(chapters, action.chapterId);
			let chapter = chapters[chapterIndex];
			const survivingTopics = [...chapter.topics];
			_.remove(survivingTopics, ['id', action.id]);
			chapter.topics = survivingTopics;
			return _.cloneDeep(chapters);

		default:
			return state;
	}
}

export default chapters;