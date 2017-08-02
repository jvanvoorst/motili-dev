import React from 'react';
import PropTypes from 'prop-types';

import { ContentList } from './InlineList';

const BonusPoints = ({content}) =>
    <ContentList content={Object.entries(content)}>BonusPoints</ContentList>;

BonusPoints.propTypes = {
    content: PropTypes.object.isRequired
};

export default BonusPoints;
