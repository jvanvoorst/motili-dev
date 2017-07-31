import React from 'react';

import Methodology from './Methodology';
import Specs from './Specs';
import Profile from './Profile';
import Equipment from './Equipment';

const MainContent = ({job}) =>
    <div style={style.mainContent}>
        <div>
            <Methodology content={job.methodology} />
            <Specs content={job.specs} />
            <Profile content={job.profile} />
            <Equipment content={job.equipment} />
        </div>
    </div>;

export default MainContent;

const style = {
    mainContent: {
        backgroundColor: '#F7F7F7'
    }
};
