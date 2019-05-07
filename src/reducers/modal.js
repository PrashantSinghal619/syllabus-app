const initialState = {
	showModal: false,
	itemType: "",
	actionType: "",
	itemId: "",
	secondaryId: "",
}

const modal = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW_MODAL':
			return {
				...state,
				showModal: action.showModal,
				itemType: action.itemType,
				actionType: action.actionType,
				itemId: action.itemId,
				secondaryId: action.secondaryId,
			}
		case 'HIDE_MODAL':
			return {
				...state,
				showModal: action.showModal,
			}
		default:
			return state;
	}
}

export default modal;