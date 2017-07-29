import React, {Component} from 'react';

import job from './data/job';
import { Header, Container } from 'semantic-ui-react';
import JobHeader from './modules/JobHeader';
import CompanyLogo from './modules/CompanyLogo';
import MainContent from './modules/mainContent';

class App extends Component {

    render() {
        return (
            <div>
                <CompanyLogo />
                <JobHeader
                    headline={job.headline}
                    essentials={job.essentials}
                />
                <MainContent
                
                />
            </div>
        );
    }
}

export default App;
