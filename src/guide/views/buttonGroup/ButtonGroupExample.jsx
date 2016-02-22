
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  Button,
  ButtonGroup,
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

  renderButtonSelected(buttonIndex) {
    return this.state.selectedIndex === buttonIndex ?
      'is-button-selected' :
      undefined;
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Text>
            Group buttons together. Can be used like a radio button group.
          </Text>
          <ButtonGroup>
            <Button
              classes={this.renderButtonSelected(0)}
              iconClasses="glyphicons-transfer"
              label="RTB Open Auction"
              onClick={() => this.setButtonSelected(0)}
            />
            <Button
              classes={this.renderButtonSelected(1)}
              iconClasses="glyphicons-handshake"
              label="Preferred Deal"
              onClick={() => this.setButtonSelected(1)}
            />
            <Button
              classes={this.renderButtonSelected(2)}
              iconClasses="glyphicons-folder-lock"
              label="Private Exchange"
              onClick={() => this.setButtonSelected(2)}
            />
          </ButtonGroup>
        </Example>
      </Page>
    );
  }

}
