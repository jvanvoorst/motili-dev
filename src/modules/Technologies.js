import React, { Component } from 'react';

import { Container, Button, List } from 'semantic-ui-react';
import cStyle from '../style/commonStyle';

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
        })
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
                <Container textAlign='center'>
                    <TechnologiesDisplay
                        content={this.state.selectedTech}
                    />
                </Container>
            </div>
        );
    }
}


const TechnologiesDisplay = ({content}) =>
    <div>
    <List horizontal size='large'>
        {Object.entries(content).map(([key, value]) => {
            if (typeof value !== 'object') {
                return (
                    <List.Item key={key}>
                        <List.Content>
                            <List.Header>{key}</List.Header>
                            <List.Description>{value}</List.Description>
                        </List.Content>
                    </List.Item>
                );
            }
        })}
    </List>
    <br></br>
    <List horizontal size='large'>
        {Object.entries(content).map(([key, value]) => {
            if (typeof value === 'object') {
                return (
                    <List.Item key={key}>
                        <List.Content>
                            <List.Header>{key} (oneof)</List.Header>
                            <List.Content>
                                <List.List>
                                    {Object.entries(value.oneof).map(([subKey, subValue]) =>
                                        <List.Item key={subKey}>
                                            <List.Content>
                                                <List.Header>{subKey}</List.Header>
                                                <List.Description>{subValue}</List.Description>
                                            </List.Content>
                                        </List.Item>
                                    )}
                                </List.List>

                            </List.Content>

                        </List.Content>
                    </List.Item>
                );
            }
        })}
    </List>
</div>

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

export default Technologies;
