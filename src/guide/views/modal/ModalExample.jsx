
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import Portal from 'react-portal';

import {
  CallOutButton,
  HollowButton,
  PrimaryButton,
  IconCog,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '../../../framework/framework';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
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
        <Example isClear>
          <Modal
            header={(
              <ModalHeader
                title="Modal Title"
                icon={<IconCog/>}
              />
            )}
            body={(
              <ModalBody>
                <div style={{height: 100}}></div>
              </ModalBody>
            )}
            footer={(
              <ModalFooter>
                <HollowButton label="Cancel" />
                <PrimaryButton
                  label="Save"
                />
              </ModalFooter>
            )}
          />
        </Example>

        <Example title="Modal without header or footer" isClear>
          <Modal
            body={(
              <ModalBody>
                <div style={{height: 100}}></div>
              </ModalBody>
            )}
          />
        </Example>

        <Example title="In ModalOverlay">
          <CallOutButton
            label="Open Modal"
            onClick={() => this.onOpen.bind(this)(1)}
          />
          <Portal isOpened={this.state.isOpen1}>
            <ModalOverlay>
              <Modal
                header={(
                  <ModalHeader
                    title="Modal Title"
                    onClose={() => this.onClose.bind(this)(1)}
                  />
                )}
                body={(
                  <ModalBody>
                    <div style={{height: 400}}></div>
                  </ModalBody>
                )}
                footer={(
                  <ModalFooter>
                    <HollowButton
                      label="Cancel"
                      onClick={() => this.onClose.bind(this)(1)}
                    />
                    <PrimaryButton
                      label="Submit"
                      onClick={() => this.onSubmit.bind(this)(1)}
                    />
                  </ModalFooter>
                )}
              />
            </ModalOverlay>
          </Portal>
        </Example>
      </Page>
    );
  }

}
