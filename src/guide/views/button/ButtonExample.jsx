
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  Button,
  CtaButton,
  HollowButton,
  PrimaryButton,
} from '../../../framework/framework.js';

export default class ButtonExample extends Component {

  constructor(props) {
    super(props);
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

        <Example title="PrimaryButton">
          <Text>
            This button lets the user perform a special action, like "Save".
            It's higher in the UI hierarchy than the HollowButton.
          </Text>
          <PrimaryButton label="Save" />
        </Example>

        <Example title="CtaButton">
          <Text>
            This button signifies a call to action. It ranks extremely highly
            in the UI hierarchy.
          </Text>
          <CtaButton
            iconClasses="glyphicons-plus"
            label="New item"
          />
        </Example>
      </Page>
    );
  }

}
