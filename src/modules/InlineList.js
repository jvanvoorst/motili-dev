import React from 'react';

import { Container, List } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';
import { Default, Mobile } from './Responsive';

const ContentList = ({children, content}) =>
    <div>
        <Default>
            <Container textAlign='left' style={cStyle.topContainer}>
                <h2 style={cStyle.header2}>{children}</h2>
            </Container>
            <Container textAlign='left'>
                <InlineList content={content}/>
            </Container>
        </Default>
        <Mobile>
            <Container textAlign='left' style={cStyle.topContainer}>
                <h2 style={cStyle.header2}>{children}</h2>
            </Container>
            <Container textAlign='center'>
                <InlineList content={content}/>
            </Container>
        </Mobile>
    </div>

const InlineList = ({children, content}) =>
    <div>
        <Default>
            <List
                horizontal
                relaxed
                style={cStyle.subContent}
            >
                {content.map(([header, description]) =>
                    <List.Item>
                        <List.Content>
                            <List.Header>{header}</List.Header>
                            <List.Description>{description}</List.Description>
                        </List.Content>
                    </List.Item>
                )}
            </List>
        </Default>
        <Mobile>
            <List
                relaxed
                style={cStyle.subContentMobile}
            >
                {content.map(([header, description]) =>
                    <List.Item>
                        <List.Content>
                            <List.Header>{header}</List.Header>
                            <List.Description>{description}</List.Description>
                        </List.Content>
                    </List.Item>
                )}
            </List>
        </Mobile>
    </div>;

export { InlineList, ContentList };
