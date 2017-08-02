import React from 'react';
import PropTypes from 'prop-types';

import WordCloud from 'react-d3-cloud';
import { Container } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';
import { Default, Mobile } from './Responsive';
import { ContentList } from './InlineList';

const Methodology = ({content}) =>
    <div>
        <Default>
            <div>
                <Container style={cStyle.topContainer}>
                    <h2 style={cStyle.header2}>Methodology</h2>
                </Container>
                <Container textAlign='center'>
                    <WordCloud
                        data={wordCloudMap(content)}
                        fontSizeMapper={fontSizeMapper}
                        rotate={0}
                        height={300}
                        width={window.innerWidth/2}
                    />
                </Container>
            </div>
        </Default>
        <Mobile>
            <ContentList content={methodologyMap(content)}>Methodologies</ContentList>
        </Mobile>
    </div>;

Methodology.propTypes = {
    content: PropTypes.object.isRequired
};

// function to randomize font size in WordCloud component
const fontSizeMapper = (word) => Math.log2(word.value) * 5;

// create array for WordCloud component
const wordCloudMap = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (value === true) {
            acc.push({text: key, value: Math.floor((Math.random() * 100) + 5)});
        } else {
            acc.push({text: `${key}: ${value}`, value: Math.floor((Math.random() * 100) + 1)});
        }
        return acc;
    }, []);

// create array  of arrays for ContentList component
const methodologyMap = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (value === true) {
            acc.push(['', key]);
        } else {
            acc.push(['', `${key}: ${value}`]);
        }
        return acc;
    }, []);

export default Methodology;
