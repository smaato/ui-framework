
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

  renderError1() {
    if (!this.state.isErrorDisplayed) {
      return undefined;
    }
    return (
      <FieldMessage
        message="Please enter a name for this endpoint."
      />
    );
  }

  renderError2() {
    if (!this.state.isErrorDisplayed) {
      return undefined;
    }
    return (
      <FieldMessage
        message="Please enter a valid number."
      />
    );
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <LabeledControl
            label="Name"
            layout={LabeledControl.LAYOUT.ONE_SIXTH}
          >
            <TextInput
              isError={this.state.isErrorDisplayed}
              isFullWidth
            />
            {this.renderError1()}
          </LabeledControl>

          <button
            type="button"
            onClick={this.onButtonClick.bind(this)}
          >
            {this.state.isErrorDisplayed ? 'Hide' : 'Show'} field message
          </button>
        </Example>

        <Example title="Message balloon as wide as field">
          <LabeledControl
            label="QPS Limit"
            layout={LabeledControl.LAYOUT.ONE_SIXTH}
          >
            <div style={{width: 200}}>
              <AddOnControl
                right="queries per second"
              >
                <TextInput
                  isFullWidth
                  isError={this.state.isErrorDisplayed}
                />
              </AddOnControl>
              {this.renderError2()}
            </div>
          </LabeledControl>

          <button
            type="button"
            onClick={this.onButtonClick.bind(this)}
          >
            {this.state.isErrorDisplayed ? 'Hide' : 'Show'} field message
          </button>
        </Example>

      </Page>
    );
  }

}
