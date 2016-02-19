
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  BasicButton,
  Button,
  ButtonGroup,
  CallOutButton,
  HollowButton,
  PrimaryButton,
} from '../../../framework/framework';

export default class ButtonExample extends Component {

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
          <Button label="Button" onClick={
            () => window.alert('Button clicked.') // eslint-disable-line no-alert
          } />
        </Example>

        <Example title="Disabled Button">
          <Button label="Button" disabled />
        </Example>

        <Example title="Button with icon">
          <Button
            iconClasses="glyphicons-plus"
            label="Button"
          />
        </Example>

        <Example title="HollowButton">
          <Text>
            This button lets the user perform a standard action, like "Cancel".
          </Text>
          <HollowButton label="Cancel" />
        </Example>

        <Example title="BasicButton">
          <Text>
            This button lets the user perform a special, but potentially
            regrettable action, like "Delete". It's higher in the UI
            hierarchy than the HollowButton.
          </Text>
          <BasicButton
            label="Delete"
          />
        </Example>

        <Example title="PrimaryButton">
          <Text>
            This button lets the user perform a special action, like "Save".
            It's higher in the UI hierarchy than the BasicButton.
          </Text>
          <PrimaryButton label="Save" />
        </Example>

        <Example title="CallOutButton">
          <Text>
            This button signifies a call to action. It ranks extremely highly
            in the UI hierarchy.
          </Text>
          <CallOutButton
            iconClasses="glyphicons-plus"
            label="New item"
          />
        </Example>

        <Example title="ButtonGroup">
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
