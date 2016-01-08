
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
      // Map of modal ids to boolean
      isOpen: {
        1: false,
        11: false,
        12: false,
        13: false,
        21: false,
        22: false,
        23: false,
      },
      stack1: [11, 12, 13],
      stack2: [21, 22, 23],
      stack1depth: 1,
      stack2depth: 1,
    };
  }

  onOpen(modalId) {
    const isOpen = Object.assign({}, this.state.isOpen);
    const state = { isOpen };
    state.isOpen[modalId] = true;
    state.stack1depth = this.findStackDepth(this.state.stack1, modalId);
    state.stack2depth = this.findStackDepth(this.state.stack2, modalId);
    this.setState(state);
  }

  onClose(modalId) {
    const isOpen = Object.assign({}, this.state.isOpen);
    const state = { isOpen };
    state.isOpen[modalId] = false;
    state.stack1depth = this.findStackDepth(this.state.stack1, modalId, true);
    state.stack2depth = this.findStackDepth(this.state.stack2, modalId, true);
    this.setState(state);
  }

  onSubmit(modalId) {
    this.onClose(modalId);
  }

  findStackDepth(stack, modalId, isClose) {
    let newDepth = 1;
    stack.some((stackedModalId, index)=>{
      const depth = index + 1;
      const isMatch = modalId === stackedModalId;
      if (isMatch) newDepth = isClose ? depth - 1 : depth;
      return isMatch;
    });
    return newDepth;
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
                <div style={{height: 110}}></div>
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
                <div style={{height: 110}}></div>
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
            isOpen={this.state.isOpen['1']}
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

        <Example title="ModalStack" isClear>
          <ModalStack depth={this.state.stack1depth}>
            <Modal
              header={(
                <ModalHeader
                  title="1st Level Modal"
                />
              )}
              body={(
                <ModalBody>
                  <CallOutButton
                    label="Open 2nd Level Modal"
                    onClick={() => this.onOpen.bind(this)(12)}
                  />
                </ModalBody>
              )}
            />
            <Modal
              header={(
                <ModalHeader
                  title="2nd Level Modal"
                  onClose={() => this.onClose.bind(this)(12)}
                />
              )}
              body={(
                <ModalBody>
                  <CallOutButton
                    label="Open 3rd Level Modal"
                    onClick={() => this.onOpen.bind(this)(13)}
                  />
                </ModalBody>
              )}
            />
            <Modal
              header={(
                <ModalHeader
                  title="3rd Level Modal"
                  onClose={() => this.onClose.bind(this)(13)}
                />
              )}
              body={(
                <ModalBody>
                  <p>I am the 3rd level modal.</p>
                </ModalBody>
              )}
            />
          </ModalStack>
        </Example>

        <Example title="ModalStack in ModalOverlay">
          <CallOutButton
            label="Open 1st Level Modal"
            onClick={() => this.onOpen.bind(this)(21)}
          />
          <ModalOverlay
            isOpen={this.state.isOpen['21']}
          >
            <ModalStack depth={this.state.stack2depth}>
              <Modal
                header={(
                  <ModalHeader
                    title="1st Level Modal"
                    onClose={() => this.onClose.bind(this)(21)}
                  />
                )}
                body={(
                  <ModalBody>
                    <CallOutButton
                      label="Open 2nd Level Modal"
                      onClick={() => this.onOpen.bind(this)(22)}
                    />
                  </ModalBody>
                )}
              />
              <Modal
                header={(
                  <ModalHeader
                    title="2nd Level Modal"
                    onClose={() => this.onClose.bind(this)(22)}
                  />
                )}
                body={(
                  <ModalBody>
                    <CallOutButton
                      label="Open 3rd Level Modal"
                      onClick={() => this.onOpen.bind(this)(23)}
                    />
                  </ModalBody>
                )}
              />
              <Modal
                header={(
                  <ModalHeader
                    title="3rd Level Modal"
                    onClose={() => this.onClose.bind(this)(23)}
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
