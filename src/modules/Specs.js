import React from 'react';
import PropTypes from 'prop-types';

import { ContentList } from './InlineList';

const Specs = ({content}) =>
    <ContentList content={mapSpecs(content)}>Specs</ContentList>;

Specs.propTypes = {
    content: PropTypes.object.isRequired
};

const mapSpecs = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (typeof value === 'object') {
            acc.push([key, `${value.from} - ${value.to}`]);
        } else {
            acc.push([key, value]);
        }
        return acc;
    }, []);

export default Specs;
