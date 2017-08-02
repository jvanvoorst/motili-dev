import React from 'react';
import PropTypes from 'prop-types';

import Methodology from './Methodology';
import Specs from './Specs';
import Profile from './Profile';
import Equipment from './Equipment';
import Technologies from './Technologies';
import BonusPoints from './BonusPoints';
import Other from './other';
import Misc from './Misc';

const MainContent = ({job}) =>
    <div style={style.mainContent}>
        <Methodology content={job.methodology} />
        <Specs content={job.specs} />
        <Profile content={job.profile} />
        <Equipment content={job.equipment} />
        <Technologies content={job.technologies} />
        <BonusPoints content={job.bonuspoints} />
        <Other content={job.other} />
        <Misc content={job.misc} />
    </div>;

MainContent.propTypes = {
    job: PropTypes.object.isRequired
};

const style = {
    mainContent: {
        backgroundColor: '#F7F7F7',
        paddingBottom: '50px'
    }
};

export default MainContent;
