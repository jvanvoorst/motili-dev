import React from 'react';

import { Container } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';
import { ContentList } from './InlineList';

const Equipment = ({content}) =>
    <ContentList content={mapEquipment(content)}>Equipment</ContentList>

export default Equipment;

const mapEquipment = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
            acc.push([key, value.join(', ')])
        } else {
            acc.push([key, value])
        }
        return acc;
    }, []);
