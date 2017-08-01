import React from 'react';

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

export default MainContent;

const style = {
    mainContent: {
        backgroundColor: '#F7F7F7'
    }
};
