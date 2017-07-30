import React from 'react';

import WordCloud from 'react-d3-cloud';
import MethodologyMobile from './MethodologyMobile';
import { Container } from 'semantic-ui-react';

const Methodology = ({content}) => {
    if (window.innerWidth > 500) {
        return (
            <div>
                <Container textAlign='center' style={style.methodologyContainer}>
                    <h2>Methodologies:</h2>
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
                <MethodologyMobile
                    data={methodologyMap(content)}
                />
            </div>
        );
    }
}

export default Methodology;

const style = {
    methodologyContainer: {
        paddingTop: '50px'
    }
}

const fontSizeMapper = (word) => Math.log2(word.value) * 5;
const rotate = word => word.value % 20;

const wordCloudMap = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (value === true) {
            acc.push({text: key, value: Math.floor((Math.random() * 100) + 1)});
        } else {
            acc.push({text: `${key}: ${value}`, value: Math.floor((Math.random() * 100) + 1)});
        }
        return acc;
    }, []);

const methodologyMap = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (value === true) {
            acc.push(key);
        } else {
            acc.push(`${key}: ${value}`);
        }
        return acc;
    }, []);
