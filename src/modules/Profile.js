import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';

const Profile = ({content}) =>
    <div>
        <Container textAlign='left' style={cStyle.topContainer}>
            <h2 style={cStyle.header2}>Profile</h2>
        </Container>
        <Container>
            {Object.entries(content).map(([key, value]) =>
                <div key={key} style={cStyle.subContent}>
                    <span>{key}</span>
                    <div style={calcBar(value)}></div>
                </div>
            )}
        </Container>
    </div>;

Profile.propTypes = {
    content: PropTypes.object.isRequired
};

// function to calculate the length of the bar for barchart
const calcBar = (data) => {
    return {
        width: `${data*1.5}%`,
        height: '20px',
        backgroundColor: 'rgb(27,98,165)',
    };
};

export default Profile;
