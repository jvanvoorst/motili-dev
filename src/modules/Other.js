import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';
import { ContentList } from './InlineList';

const Other = ({content}) =>
    <ContentList content={mapOther(content)}>Other</ContentList>;

export default Other;

const mapOther = (data) =>
    data.reduce((acc,item) => {
        acc.push([item]);
        return acc;
    }, []);
