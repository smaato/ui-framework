
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  ButtonGroup,
  GroupedButton,
} from '../../../framework/framework';

export default class ButtonGroupExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  setButtonSelected(buttonIndex) {
    this.setState({
      selectedIndex: buttonIndex,
    });
  }

  isButtonSelected(buttonIndex) {
    return this.state.selectedIndex === buttonIndex;
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Text>
            Group buttons together. Can be used like a radio button group.
          </Text>
          <ButtonGroup>
            <GroupedButton
              onClick={() => this.setButtonSelected(0)} // eslint-disable-line react/jsx-no-bind
              selected={this.isButtonSelected(0)}
            >
              First
            </GroupedButton>
            <GroupedButton
              onClick={() => this.setButtonSelected(1)} // eslint-disable-line react/jsx-no-bind
              selected={this.isButtonSelected(1)}
            >
              Second
            </GroupedButton>
            <GroupedButton
              onClick={() => this.setButtonSelected(2)} // eslint-disable-line react/jsx-no-bind
              selected={this.isButtonSelected(2)}
            >
              Third
            </GroupedButton>
          </ButtonGroup>
        </Example>
      </Page>
    );
  }

}

ButtonGroupExample.propTypes = {
  route: PropTypes.object.isRequired,
};
