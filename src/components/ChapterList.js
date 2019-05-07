import React from 'react';
import PropTypes from 'prop-types';

const ChapterList = ({ children }) => (
	<tbody className="chapter-list">
    {children}
  </tbody>
)

ChapterList.propTypes = {
	children: PropTypes.node,
}

export default ChapterList;