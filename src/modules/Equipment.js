import React from 'react';

import { Container } from 'semantic-ui-react';
import { header2 } from '../style/commonStyle';

const Equipment = ({content}) =>
    <div>
        <Container textAlign='left'>
            <h2 style={header2}>Equipment</h2>
        </Container>
        {/* <Container>
            <InlineList content={content} />
        </Container> */}
    </div>;

export default Equipment;

const mapEquipment = (data) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        if (value.isArray) {
            acc.push(value.forEach((item) => item = item++))
        } else {
            acc.push(value)
        }
        return acc;
    }, []);

const data = {
    "operatingsystem": ['MacOSX', 'CentOS'],
    "computer": 'Laptop',
    "monitors": 'Negotiable',
};

console.log(mapEquipment(data));
