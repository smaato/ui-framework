
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

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
  ModalStack,
} from '../../../framework/framework';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      stackIds: [2, 3, 4],
      activeDepth: 1,
    };
  }

  onOpen(modalId) {
    const state = {};
    state[`isOpen${modalId}`] = true;

    state.activeDepth = 1;
    this.state.stackIds.some((item, index)=>{
      const depth = index + 1;
      if (modalId === item) {
        state.activeDepth = depth;
        return true;
      }
      return false;
    });

    this.setState(state);
  }

  onClose(modalId) {
    const state = {};
    state[`isOpen${modalId}`] = false;

    state.activeDepth = 1;
    for (let index = this.state.stackIds.length; index > 0; --index) {
      const stackedModalId = this.state.stackIds[index];
      const depth = index + 1;
      if (modalId === stackedModalId) {
        state.activeDepth = depth - 1;
      }
    }

    this.setState(state);
  }

  onSubmit(modalId) {
    const state = {};
    state[`isOpen${modalId}`] = false;
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
          <ModalOverlay
            isOpen={this.state.isOpen1}
          >
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
        </Example>

        <Example title="Stacked">
          <CallOutButton
            label="Open 1st Level Modal"
            onClick={() => this.onOpen.bind(this)(2)}
          />
          <ModalOverlay
            isOpen={this.state.isOpen2}
          >
            <ModalStack activeDepth={this.state.activeDepth}>
              <Modal
                header={(
                  <ModalHeader
                    title="1st Level Modal"
                    onClose={() => this.onClose.bind(this)(2)}
                  />
                )}
                body={(
                  <ModalBody>
                    <CallOutButton
                      label="Open 2nd Level Modal"
                      onClick={() => this.onOpen.bind(this)(3)}
                    />
                  </ModalBody>
                )}
              />
              <Modal
                header={(
                  <ModalHeader
                    title="2nd Level Modal"
                    onClose={() => this.onClose.bind(this)(3)}
                  />
                )}
                body={(
                  <ModalBody>
                    <CallOutButton
                      label="Open 3rd Level Modal"
                      onClick={() => this.onOpen.bind(this)(4)}
                    />
                  </ModalBody>
                )}
              />
              <Modal
                header={(
                  <ModalHeader
                    title="3rd Level Modal"
                    onClose={() => this.onClose.bind(this)(4)}
                  />
                )}
                body={(
                  <ModalBody>
                    <p>I am the 3rd level modal.</p>
                  </ModalBody>
                )}
              />
            </ModalStack>
          </ModalOverlay>
        </Example>
      </Page>
    );
  }

}
