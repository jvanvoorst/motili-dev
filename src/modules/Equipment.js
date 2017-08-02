import React from 'react';
import PropTypes from 'prop-types';

import { ContentList } from './InlineList';

const Equipment = ({content}) =>
    <ContentList content={mapEquipment(content)}>Equipment</ContentList>;

Equipment.propTypes = {
    content: PropTypes.object.isRequired
};

const mapEquipment = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
            acc.push([key, value.join(', ')]);
        } else {
            acc.push([key, value]);
        }
        return acc;
    }, []);

export default Equipment;
