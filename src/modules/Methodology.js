import React from 'react';

import WordCloud from 'react-d3-cloud';
import { Container, List } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';

const Methodology = ({content}) => {
    if (window.innerWidth > 500) {
        return (
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
        );
    } else {
        return (
            <div>
                <h2>Methodologies:</h2>
                <List items={methodologyMap(content)} />
            </div>
        );
    }
}

export default Methodology;

// functions for WordCloud component
const fontSizeMapper = (word) => Math.log2(word.value) * 5;
const rotate = word => word.value % 20;

// create array for WordCloud component
const wordCloudMap = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (value === true) {
            acc.push({text: key, value: Math.floor((Math.random() * 100) + 1)});
        } else {
            acc.push({text: `${key}: ${value}`, value: Math.floor((Math.random() * 100) + 1)});
        }
        return acc;
    }, []);

// create array for MethodologyMobile component
const methodologyMap = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (value === true) {
            acc.push(key);
        } else {
            acc.push(`${key}: ${value}`);
        }
        return acc;
    }, []);
