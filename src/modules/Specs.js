import React from 'react';

import { Container, List } from 'semantic-ui-react';
import { header2 } from '../style/commonStyle';
import InlineList from './InlineList';

const Specs = ({content}) =>
    <div>
        <Container textAlign='left'>
            <h2 style={header2}>Specs</h2>
        </Container>
        <Container textAlign='center'>
            <InlineList content={mapSpecs(content)} />
        </Container>
    </div>;

export default Specs;

const mapSpecs = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (typeof value === 'object') {
            acc.push([key, `${value.from} - ${value.to}`]);
        } else {
            acc.push([key, value]);
        }
        return acc;
    }, []);
