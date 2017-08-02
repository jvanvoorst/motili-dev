import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Button, List } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';
import { InlineList } from './InlineList';

class Technologies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTech: this.props.content.seasoned,
            activeTech: 'seasoned'
        };

        this.setSelectedTech = this.setSelectedTech.bind(this);
    }

    setSelectedTech(selection) {
        this.setState({
            selectedTech: this.props.content[selection],
            activeTech: selection
        });
    }

    render() {
        return (
            <div>
                <Container textAlign='left' style={cStyle.topContainer}>
                    <h2 style={cStyle.header2}>Technologies</h2>
                    <TechSelectButton
                        onSelect={this.setSelectedTech}
                        activeTech={this.state.activeTech}
                    />
                </Container>
                <Container>
                    <InlineList content={mapTechnologiesString(this.state.selectedTech)} />
                    <List>
                        <List.Item>
                            <List.Content>
                                <List.Header style={cStyle.subContent}>testing (oneof)</List.Header>
                                <List.Description>
                                    <InlineList content={Object.entries(this.state.selectedTech.testing.oneof)} />
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                    <List>
                        <List.Item>
                            <List.Content>
                                <List.Header style={cStyle.subContent}>framework (oneof)</List.Header>
                                <List.Description>
                                    <InlineList content={Object.entries(this.state.selectedTech.framework.oneof)} />
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </Container>
            </div>
        );
    }
}

Technologies.propTypes = {
    content: PropTypes.object.isRequired
};

const TechSelectButton = ({onSelect, activeTech}) =>
    <Button.Group floated='right'>
        <Button
            active={activeTech === 'junior'}
            onClick={() => onSelect('junior')}
        >
            Junior
        </Button>
        <Button
            active={activeTech === 'seasoned'}
            onClick={() => onSelect('seasoned')}
        >
            Seasoned
        </Button>
    </Button.Group>;

TechSelectButton.propTypes = {
    onSelect: PropTypes.func.isRequired,
    activeTech: PropTypes.string.isRequired
};

const mapTechnologiesString = (data) =>
    Object.entries(data).filter(([key, value]) => typeof value !== 'object');

export default Technologies;
