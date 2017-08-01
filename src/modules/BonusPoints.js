import React, { Component } from 'react';

import { ContentList } from './InlineList';

const BonusPoints = ({content}) =>
    <ContentList content={Object.entries(content)}>BonusPoints</ContentList>

export default BonusPoints;
