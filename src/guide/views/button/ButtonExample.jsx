
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  BasicButton,
  Button,
  CallOutButton,
  HollowButton,
  PrimaryButton,
} from '../../../framework/framework';

export default class ButtonExample extends Component {

  constructor(props) {
    super(props);
  }

  onClick() {
    window.alert('Button clicked.'); // eslint-disable-line no-alert
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Button
            label="Button"
            onClick={this.onClick}
          />
        </Example>

        <Example title="Button as link">
          <Button
            label="Button"
            href="//google.com"
          />
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
      </Page>
    );
  }

}

ButtonExample.propTypes = {
  route: PropTypes.object.isRequired,
};
