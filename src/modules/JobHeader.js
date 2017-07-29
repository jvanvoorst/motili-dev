import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from 'semantic-ui-react';
import EssentialsAccordion from './EssentialsAccordion';

const JobHeader = ({headline, essentials}) =>
    <Container textAlign='center' style={style.headerContainer}>
        <h1 style={style.mainHeader}>{headline}</h1>
        <EssentialsAccordion content={essentials} />
    </Container>;

export default JobHeader

const style =  {
    mainHeader: {
        paddingTop: '110px',
        fontSize: '4rem',
        fontFamily: 'Open Sans'
    },
    headerContainer: {
        height: '360px',
        width: '100%',
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: '10px',
        borderBottomStyle: 'solid'
    }
};
