import React, { Component } from 'react';

import { ContentList } from './InlineList';

const Misc = ({content}) =>
    <ContentList content={mapMisc(content)}>Misc</ContentList>;

export default Misc;

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
