import React from 'react';

import Methodology from './Methodology';

const MainContent = ({job}) =>
    <div style={style.mainContent}>
        <div>
            <Methodology content={job.methodology}/>
        </div>
    </div>;

export default MainContent;

const style = {
    mainContent: {
        backgroundColor: '#F7F7F7'
    }
};
