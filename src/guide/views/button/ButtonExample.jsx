
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  AlertButton,
  BasicButton,
  Button,
  CallOutButton,
  HollowButton,
  PrimaryButton,
} from '../../../framework/framework';

export default class ButtonExample extends Component {

  onClick(data) {
    window.alert(data); // eslint-disable-line no-alert
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Button
            onClick={this.onClick}
            data="Test"
          >
            Button
          </Button>
        </Example>

        <Example title="HollowButton">
          <Text>
            This button lets the user perform a standard action, like
            &quot;Cancel&quot;.
          </Text>
          <HollowButton>
            Cancel
          </HollowButton>
        </Example>

        <Example title="BasicButton">
          <Text>
            This button lets the user perform a special, but potentially
            regrettable action, like &quot;Delete&quot;. It&apos;s higher in the
            UI hierarchy than the HollowButton.
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
            This button lets the user perform a special action, like
            &quot;Save&quot;. It&apos;s higher in the UI hierarchy than the
            BasicButton.
          </Text>
          <PrimaryButton>
            Save
          </PrimaryButton>
        </Example>

        <Example title="AlertButton">
          <Text>
            This button lets the user perform a special action, like
            &quot;Delete&quot;. It&apos;s higher in the UI hierarchy than the
            BasicButton.
          </Text>
          <AlertButton>
            Delete
          </AlertButton>
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
          <PrimaryButton type={Button.TYPE.ADD}>
            ADD
          </PrimaryButton>
          {' '}
          <BasicButton type={Button.TYPE.DEAL}>
            DEAL
          </BasicButton>
          {' '}
          <BasicButton type={Button.TYPE.EXCHANGE}>
            EXCHANGE
          </BasicButton>
          {' '}
          <HollowButton type={Button.TYPE.LOG}>
            LOG
          </HollowButton>
          {' '}
          <BasicButton type={Button.TYPE.PRIVATE_DEAL}>
            PRIVATE_DEAL
          </BasicButton>
        </Example>
      </Page>
    );
  }

}

ButtonExample.propTypes = {
  route: PropTypes.object.isRequired,
};
