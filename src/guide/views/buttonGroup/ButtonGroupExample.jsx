
import React, {
  Component,
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
              selected={this.isButtonSelected(0)}
              iconClasses="glyphicons-transfer"
              label="RTB Open Auction"
              onClick={() => this.setButtonSelected(0)} // eslint-disable-line react/jsx-no-bind
            />
            <GroupedButton
              selected={this.isButtonSelected(1)}
              iconClasses="glyphicons-handshake"
              label="Preferred Deal"
              onClick={() => this.setButtonSelected(1)} // eslint-disable-line react/jsx-no-bind
            />
            <GroupedButton
              selected={this.isButtonSelected(2)}
              iconClasses="glyphicons-folder-lock"
              label="Private Exchange"
              onClick={() => this.setButtonSelected(2)} // eslint-disable-line react/jsx-no-bind
            />
          </ButtonGroup>
        </Example>
      </Page>
    );
  }

}
