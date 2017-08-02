import React from 'react';

import Responsive from 'react-responsive';

const Default = ({ children }) =>
    <Responsive minWidth={768} children={children} />;

const Mobile = ({ children }) =>
    <Responsive maxWidth={768} children={children} />;

export { Default, Mobile };
