import React from 'react';
import PropTypes from 'prop-types';

import { Container, List } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';
import { Default, Mobile } from './Responsive';

// shared component that wraps the InlineList component and adds the header
// takes children and content as array of arrays as input
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
    </div>;

ContentList.propTypes = {
    children: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired
};

// shared component for all of the lists
// takes and array of arrays for input
const InlineList = ({content}) =>
    <div>
        <Default>
            <List
                horizontal
                relaxed
                style={cStyle.subContent}
            >
                {content.map(([header, description], index) =>
                    <List.Item key={index}>
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
                {content.map(([header, description], index) =>
                    <List.Item key={index}>
                        <List.Content>
                            <List.Header>{header}</List.Header>
                            <List.Description>{description}</List.Description>
                        </List.Content>
                    </List.Item>
                )}
            </List>
        </Mobile>
    </div>;

InlineList.propTypes = {
    content: PropTypes.array.isRequired
};

export { InlineList, ContentList };
