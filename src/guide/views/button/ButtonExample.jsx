
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
    const iconButtons = Object.keys(Button.TYPE).map(key =>
      <PrimaryButton
        type={Button.TYPE[key]}
        key={key}
      >
        {key}
      </PrimaryButton>
    );

    return (
      <Page title={this.props.route.name}>
        <Example>
          <Button onClick={this.onClick}>
            Button
          </Button>
        </Example>

        <Example title="HollowButton">
          <Text>
            This button lets the user perform a standard action, like "Cancel".
          </Text>
          <HollowButton>
            Cancel
          </HollowButton>
        </Example>

        <Example title="BasicButton">
          <Text>
            This button lets the user perform a special, but potentially
            regrettable action, like "Delete". It's higher in the UI
            hierarchy than the HollowButton.
          </Text>
          <BasicButton>
            Delete
          </BasicButton>
        </Example>

        <Example title="BasicButton as link">
          <BasicButton href="//google.com">
            Google.com
          </BasicButton>
        </Example>

        <Example title="Disabled BasicButton">
          <BasicButton disabled>
            Delete
          </BasicButton>
        </Example>

        <Example title="PrimaryButton">
          <Text>
            This button lets the user perform a special action, like "Save".
            It's higher in the UI hierarchy than the BasicButton.
          </Text>
          <PrimaryButton>
            Save
          </PrimaryButton>
        </Example>

        <Example title="CallOutButton">
          <Text>
            This button signifies a call to action. It ranks extremely highly
            in the UI hierarchy.
          </Text>
          <CallOutButton>
            New item
          </CallOutButton>
        </Example>

        <Example title="Buttons with icons">
          {iconButtons}
        </Example>
      </Page>
    );
  }

}

ButtonExample.propTypes = {
  route: PropTypes.object.isRequired,
};
