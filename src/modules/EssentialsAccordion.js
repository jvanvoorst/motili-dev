import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Icon, List } from 'semantic-ui-react';
import { toCapitalCase, formatDate } from '../helpers/helperFuncs';

const list = ['one', 'two', 'three'];

const EssentialsAccordion = ({content}) =>
    <Accordion>
        <Accordion.Title style={style.title}>
            <Icon name='dropdown' />
            Essentials
        </Accordion.Title>
        <Accordion.Content>
            <List horizontal>
                <List.Item>
                    <List.Content>
                        <List.Header>Locations</List.Header>
                        <List.Description>{toCapitalCase(content.locations)}</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Employment</List.Header>
                        <List.Description>{toCapitalCase(content.employment)}</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Experience</List.Header>
                        <List.Description>{toCapitalCase(content.experience[0])}</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Start Date</List.Header>
                        <List.Description>{formatDate(content.startdate)}</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Company Size</List.Header>
                        <List.Description>{toCapitalCase(content.companysize)}</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Team Size</List.Header>
                        <List.Description>{`${content.teamsize.min} - ${content.teamsize.max}`}</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Accordion.Content>
    </Accordion>

EssentialsAccordion.propTypes = {
    content: PropTypes.object.isRequired
};

export default EssentialsAccordion;

const style = {
    title: {
        fontSize: '2rem'
    }
}
