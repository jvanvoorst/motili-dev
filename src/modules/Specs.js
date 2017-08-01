import React from 'react';

import { Container, List } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';
import { ContentList } from './InlineList';

const Specs = ({content}) =>
    <ContentList content={mapSpecs(content)}>Specs</ContentList>;

export default Specs;

const mapSpecs = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (typeof value === 'object') {
            acc.push([key, `${value.from} - ${value.to}`]);
        } else {
            acc.push([key, value]);
        }
        return acc;
    }, []);
