import React from 'react';
import PropTypes from 'prop-types';

import { ContentList } from './InlineList';

const Misc = ({content}) =>
    <ContentList content={mapMisc(content)}>Misc</ContentList>;

Misc.propTypes = {
    content: PropTypes.object.isRequired
};

const mapMisc = (data) =>
    Object.entries(data).filter(([key, value]) => value).reduce((acc, [key, value]) => {
        if (value === true) {
            acc.push(['', key]);
        } else if (Array.isArray(value)) {
            acc.push([key, value.join(', ')]);
        } else {
            acc.push([key, value]);
        }
        return acc;
    },[]);

export default Misc;
