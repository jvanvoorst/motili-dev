import React from 'react';

import { Container } from 'semantic-ui-react';
import { header2 } from '../style/commonStyle';
import InlineList from './InlineList';

const Equipment = ({content}) =>
    <div>
        <Container textAlign='left'>
            <h2 style={header2}>Equipment</h2>
        </Container>
        <Container textAlign='center'>
            <InlineList content={mapEquipment(content)} />
        </Container>
    </div>;

export default Equipment;

const mapEquipment = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
            acc.push([key, value.join(', ')])
        } else {
            acc.push([key, value])
        }
        return acc;
    }, []);
