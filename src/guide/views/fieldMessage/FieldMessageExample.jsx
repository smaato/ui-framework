
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  CallOutButton,
  FieldMessage,
  LabeledControl,
  TextInput,
} from '../../../framework/framework';

export default class FieldMessageExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isErrorDisplayed: true,
    };
  }

  onButtonClick() {
    this.setState({
      isErrorDisplayed: !this.state.isErrorDisplayed,
    });
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="TextInput">
          <LabeledControl
            label="Name"
            layout={LabeledControl.LAYOUT.ONE_SIXTH}
          >
            <FieldMessage
              message="Please enter a name for this endpoint."
              isDisplayed={this.state.isErrorDisplayed}
            >
              <TextInput
                isError={this.state.isErrorDisplayed}
                isFullWidth
              />
            </FieldMessage>
          </LabeledControl>

          <CallOutButton
            label={
              `${this.state.isErrorDisplayed ? 'Hide' : 'Show'} field message.`
            }
            onClick={this.onButtonClick.bind(this)}
          />
        </Example>

        <Example title="AddOnControl">
          <LabeledControl
            label="QPS Limit"
            layout={LabeledControl.LAYOUT.ONE_SIXTH}
          >
            <FieldMessage
              message="Please enter a valid number."
              isDisplayed={this.state.isErrorDisplayed}
              hasChildsWidth
            >
              <AddOnControl
                right="queries per second"
              >
                <TextInput
                  isError={this.state.isErrorDisplayed}
                />
              </AddOnControl>
            </FieldMessage>
          </LabeledControl>

          <CallOutButton
            label={
              `${this.state.isErrorDisplayed ? 'Hide' : 'Show'} field message.`
            }
            onClick={this.onButtonClick.bind(this)}
          />
        </Example>

      </Page>
    );
  }

}
