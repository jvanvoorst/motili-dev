import React from 'react';

import { Container } from 'semantic-ui-react';
import { header2 } from '../style/commonStyle';

const Profile = ({content}) =>
    <div>
        <Container textAlign='left'>
            <h2 style={header2}>Profile</h2>
        </Container>
        <Container>
            {Object.entries(content).map(([key, value]) =>
                <div key={key}>
                    <span>{key}</span>
                    <div style={calcBar(value)}></div>
                </div>
            )}
        </Container>
    </div>

export default Profile;

const calcBar = (data) => {
    return {
        width: data*10,
        height: '20px',
        backgroundColor: 'rgb(27,98,165)',
    }
}
