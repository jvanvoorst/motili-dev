import React from 'react';
import PropTypes from 'prop-types';

import Responsive from 'react-responsive';

const Default = ({ children }) =>
    <Responsive minWidth={768}>{children}</Responsive>;

Default.propTypes = {
    children: PropTypes.node.isRequired
};

const Mobile = ({ children }) =>
    <Responsive maxWidth={768}>{children}</Responsive>;

Mobile.propTypes = {
    children: PropTypes.node.isRequired
};

export { Default, Mobile };
