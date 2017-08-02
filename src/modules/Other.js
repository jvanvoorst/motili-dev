import React from 'react';
import PropTypes from 'prop-types';

import { ContentList } from './InlineList';

const Other = ({content}) =>
    <ContentList content={mapOther(content)}>Other</ContentList>;

Other.propTypes = {
    content: PropTypes.array.isRequired
};

const mapOther = (data) =>
    data.reduce((acc,item) => {
        acc.push([item]);
        return acc;
    }, []);

export default Other;
