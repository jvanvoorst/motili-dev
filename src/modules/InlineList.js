import React from 'react';

import { Container, List } from 'semantic-ui-react';

const InlineList = ({content}) =>
    <List horizontal>
        {content.map(([header, description]) =>
            <List.Item key={header}>
                <List.Content>
                    <List.Header>{header}</List.Header>
                    <List.Description>{description}</List.Description>
                </List.Content>
            </List.Item>
        )}
    </List>;

export default InlineList;
