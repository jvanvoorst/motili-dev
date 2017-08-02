import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Icon } from 'semantic-ui-react';
import { toCapitalCase, formatDate } from '../helpers/helperFuncs';
import { InlineList } from './InlineList';
import cStyle from '../style/commonStyle';

const EssentialsAccordion = ({content}) =>
    <Accordion>
        <Accordion.Title>
            <Icon name='dropdown' /><h2 style={cStyle.header2}>Essentials</h2>
        </Accordion.Title>
        <Accordion.Content>
            <InlineList content={mapEssentials(content)} />
        </Accordion.Content>
    </Accordion>;

EssentialsAccordion.propTypes = {
    content: PropTypes.object.isRequired
};

const mapEssentials = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
            acc.push([key, value.join(', ')]);
        } else if (key === 'startdate') {
            acc.push([key, formatDate(value)]);
        } else if (typeof value === 'object') {
            acc.push([key, `${value.min} - ${value.max}`]);
        } else {
            acc.push([key, toCapitalCase(value)]);
        }
        return acc;
    }, []);

export default EssentialsAccordion;
