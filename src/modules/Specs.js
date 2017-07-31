import React from 'react';

import { Container, List } from 'semantic-ui-react';
import { header2 } from '../style/commonStyle';

const Specs = ({content}) =>
    <div>
        <Container textAlign='left'>
            <h2 style={header2}>Specs</h2>
        </Container>
        <Container textAlign='center'>
            <List horizontal>
                {Object.entries(content).map(([key, value]) => {
                    if (typeof value !== 'object') {
                        return (
                            <List.Item key={key}>
                                <List.Content>
                                    <List.Header>{key}</List.Header>
                                    <List.Description>{value}</List.Description>
                                </List.Content>
                            </List.Item>
                        );
                    }
                    return (
                        <List.Item key={key}>
                            <List.Content>
                                <List.Header>{key}</List.Header>
                                <List.Description>{value.from} - {value.to}</List.Description>
                                {/* <List.List>
                                    {Object.entries(value).map(([subKey, subValue]) => {
                                        return (
                                            <List.Item key={subKey}>
                                                {subKey} - {subValue}
                                            </List.Item>
                                        );
                                    })}
                                </List.List> */}
                            </List.Content>
                        </List.Item>
                    );
                })}
            </List>
        </Container>
    </div>;

export default Specs;
