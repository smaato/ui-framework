
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CallOutButton,
  PrimaryButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from '../../../framework/framework.js';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
    };
  }

  onOpen(exampleNumber) {
    const state = {};
    state[`isOpen${exampleNumber}`] = true;
    this.setState(state);
  }

  onClose(exampleNumber) {
    const state = {};
    state[`isOpen${exampleNumber}`] = false;
    this.setState(state);
  }

  onSubmit(exampleNumber) {
    const state = {};
    state[`isOpen${exampleNumber}`] = false;
    this.setState(state);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <CallOutButton
            label="Open Modal 1"
            onClick={() => this.onOpen.bind(this)(1)}
          />
          <Modal
            isOpen={this.state.isOpen1}
            header={(
              <ModalHeader
                title="Add"
                onClose={() => this.onClose.bind(this)(1)}
              />
            )}
            body={(
              <ModalBody>
                <p>Notice that you can resize the window to be shorter and the
                content in this modal will scroll.</p>
              </ModalBody>
            )}
            footer={(
              <ModalFooter>
                <ModalCloseButton
                  onClick={() => this.onClose.bind(this)(1)}
                />
                <PrimaryButton
                  label="Save"
                  onClick={() => this.onSubmit.bind(this)(1)}
                />
              </ModalFooter>
            )}
          />
        </Example>

        <Example title="No header and footer">
          <CallOutButton
            label="Open Modal 2"
            onClick={() => this.onOpen.bind(this)(2)}
          />
          <Modal
            isOpen={this.state.isOpen2}
            body={(
              <ModalBody>
                <p>Notice that you can resize the window to be shorter and the
                content in this modal will scroll.</p>
                <ModalCloseButton
                  onClick={() => this.onClose.bind(this)(2)}
                />
              </ModalBody>
            )}
          />
        </Example>
      </Page>
    );
  }

}
