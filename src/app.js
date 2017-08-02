import React from 'react';

import job from './data/job';
import CompanyLogo from './modules/CompanyLogo';
import JobHeader from './modules/JobHeader';
import MainContent from './modules/mainContent';

const App = () =>
    <div>
        <CompanyLogo />
        <JobHeader
            headline={job.headline}
            essentials={job.essentials}
        />
        <MainContent
            job={job}
        />
    </div>;

export default App;
