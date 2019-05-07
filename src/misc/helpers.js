import _ from 'lodash';

// Helper function to return array index of the item by its id
export const findItemIndex = (items, id) => {
	return _.findIndex(items, ['id', id]);
}