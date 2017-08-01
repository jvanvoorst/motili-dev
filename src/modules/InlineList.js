import React from 'react';

import { Container, List } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';

const ContentList = ({children, content}) =>
    <div>
        <Container textAlign='left' style={cStyle.topContainer}>
            <h2 style={cStyle.header2}>{children}</h2>
            <InlineList content={content}/>
        </Container>
    </div>

const InlineList = ({content}) =>
    <List
        horizontal
        relaxed
        style={style.inlineList}
    >
        {content.map(([header, description]) =>
            <List.Item>
                <List.Content>
                    <List.Header>{header}</List.Header>
                    <List.Description>{description}</List.Description>
                </List.Content>
            </List.Item>
        )}
    </List>;

export { InlineList, ContentList };

const style = {
    inlineList: {
        paddingLeft: '100px'
    }
};
