
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
      stackIds1: [11, 12, 13],
      stackIds2: [21, 22, 23],
      stackDepth1: 1,
      stackDepth2: 1,
    };

    this.stackModals1 = [
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
        key={11}
      />,
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
        key={12}
      />,
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
        key={14}
      />,
    ];

    this.stackModals2 = [
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
        key={21}
      />,
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
        key={22}
      />,
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
        key={23}
      />,
    ];
  }

  onOpen(modalId) {
    const isOpen = Object.assign({}, this.state.isOpen);
    const state = { isOpen };
    state.isOpen[modalId] = true;
    state.stackDepth1 = this.findStackDepth(this.state.stackIds1, modalId);
    state.stackDepth2 = this.findStackDepth(this.state.stackIds2, modalId);
    this.setState(state);
  }

  onClose(modalId) {
    const isOpen = Object.assign({}, this.state.isOpen);
    const state = { isOpen };
    state.isOpen[modalId] = false;
    state.stackDepth1 = this.findStackDepth(this.state.stackIds1, modalId, true);
    state.stackDepth2 = this.findStackDepth(this.state.stackIds2, modalId, true);
    this.setState(state);
  }

  onSubmit(modalId) {
    this.onClose(modalId);
  }

  getOpenStackedModals(stackModals, depth) {
    const openModals = stackModals.slice(0, depth);
    return openModals;
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
          <ModalStack>
            {this.getOpenStackedModals(
              this.stackModals1,
              this.state.stackDepth1
            )}
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
            <ModalStack>
              {this.getOpenStackedModals(
                this.stackModals2,
                this.state.stackDepth2
              )}
            </ModalStack>
          </ModalOverlay>
        </Example>
      </Page>
    );
  }

}
