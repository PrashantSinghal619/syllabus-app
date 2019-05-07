const initialState = {
	showSyllabus: false,
	standard: "",
	subject: "",
}

const syllabus = (state = initialState, action) => {
	switch(action.type) {
	case 'SHOW_SYLLABUS':
		return {
			showSyllabus: action.showSyllabus,
			standard: action.standard,
			subject: action.subject,
		}
	default:
		return state;
	}
}

export default syllabus;