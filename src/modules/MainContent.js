import React from 'react';

import Methodology from './Methodology';
import Specs from './Specs';

const MainContent = ({job}) =>
    <div style={style.mainContent}>
        <div>
            <Methodology content={job.methodology} />
            <Specs content={job.specs} />
        </div>
    </div>;

export default MainContent;

const style = {
    mainContent: {
        backgroundColor: '#F7F7F7'
    }
};
