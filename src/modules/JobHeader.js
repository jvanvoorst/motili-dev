import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';
import EssentialsAccordion from './EssentialsAccordion';

const JobHeader = ({headline, essentials}) =>
    <div style={style.headerContainer}>
        <Container textAlign='center'>
            <h1 style={style.headerText}>{headline}</h1>
            <EssentialsAccordion content={essentials} />
        </Container>
    </div>;

JobHeader.propTypes = {
    headline: PropTypes.string.isRequired,
    essentials: PropTypes.object.isRequired
};

const style =  {
    headerText: {
        paddingTop: '110px',
        fontSize: '4rem',
        fontFamily: 'Open Sans'
    },
    headerContainer: {
        height: (window.innerWidth > 500 ? '360px' : ''),
        width: '100%',
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: '10px',
        borderBottomStyle: 'solid'
    }
};

export default JobHeader;
