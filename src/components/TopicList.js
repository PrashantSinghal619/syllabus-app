import React from 'react';
import PropTypes from 'prop-types';

const TopicList = ({ children }) => (
	<ol className="topic-list">
		{children}
	</ol>
)

TopicList.propTypes = {
	children: PropTypes.node,
}

export default TopicList;