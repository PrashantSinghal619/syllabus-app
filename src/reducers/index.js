import { combineReducers } from 'redux';
import syllabus from './syllabus';
import chapters from './chapters';
// import topics from './topics';
import modal from './modal';

const rootReducer = combineReducers({
	syllabus,
	chapters,
	modal,
});

export default rootReducer;