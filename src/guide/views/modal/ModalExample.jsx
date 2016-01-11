
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import $ from 'jquery';

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
      // Map of modal ids to modal isOpen state
      isOpen: {
        1: false,
        11: true,
        12: false,
        13: false,
        14: false,
        21: false,
        22: false,
        23: false,
      },
      // Map of stack index to stack depth
      stackDepth: [
        1,
        0,
      ],
    };
    this.stacks = [
      {
        ids: [11, 12, 13, 14],
        modals: [
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
            onClick={() => this.onPrevModalClick.bind(this)(12)}
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
            onClick={() => this.onPrevModalClick.bind(this)(13)}
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
                <CallOutButton
                  label="Open 3rd Level Modal"
                  onClick={() => this.onOpen.bind(this)(14)}
                />
              </ModalBody>
            )}
            key={14}
          />,
          <Modal
            header={(
              <ModalHeader
                title="4th Level Modal"
                onClose={() => this.onClose.bind(this)(14)}
              />
            )}
            body={(
              <ModalBody>
                <p>I am the 4rd level modal.</p>
              </ModalBody>
            )}
            key={15}
          />,
        ],
      },
      {
        ids: [21, 22, 23],
        modals: [
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
            onClick={() => this.onPrevModalClick.bind(this)(22)}
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
            onClick={() => this.onPrevModalClick.bind(this)(23)}
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
        ],
      },
    ];
  }

  onOpen(modalId) {
    this.calcOpenStates(modalId);
  }

  onClose(modalId) {
    this.calcOpenStates(modalId, true);
  }

  onPrevModalClick(currentModalId) {
    this.state.isOpen[currentModalId] ? this.onClose(currentModalId) : null;
  }

  onSubmit(modalId) {
    this.calcOpenStates(modalId, true);
  }

  getOpenStackedModals(stackIndex) {
    const stackModals = this.stacks[stackIndex].modals;
    const depth = this.state.stackDepth[stackIndex];
    const openModals = stackModals.slice(0, depth);
    return openModals;
  }

  calcOpenStates(modalId, isClose = false) {
    const state = $.extend(true, {}, this.state);
    state.isOpen[modalId] = false;
    this.updateStackState(state, modalId, isClose);
    this.setState(state);
  }

  findStackDepth(stackModalIds, modalId, isClose) {
    let newDepth = 1;
    stackModalIds.some((stackModalId, index)=>{
      const depth = index + 1;
      const isMatch = modalId === stackModalId;
      if (isMatch) newDepth = isClose ? depth - 1 : depth;
      return isMatch;
    });
    return newDepth;
  }

  findStackIndexById(stacks, modalId) {
    let currentStackIndex;
    stacks.some((stack, stackIndex) => {
      const isIdInStack = stack.ids
        .some(stackModalId => stackModalId === modalId);
      if (isIdInStack) {
        currentStackIndex = stackIndex;
      }
      return isIdInStack;
    });
    return currentStackIndex;
  }

  updateStackOpenState(stackModalIds, stackDepth, isOpenObj) {
    stackModalIds.forEach((stackModalId, index) => {
      const depth = index + 1;
      const isOpen = depth <= stackDepth;
      isOpenObj[stackModalId] = isOpen;
    });
  }

  updateStackState(state, modalId, isClose) {
    const currentStack = this.findStackIndexById(this.stacks, modalId);
    state.stackDepth[currentStack] = this.findStackDepth(
      this.stacks[currentStack].ids,
      modalId,
      isClose
    );
    this.updateStackOpenState(
      this.stacks[currentStack].ids,
      state.stackDepth[currentStack],
      state.isOpen
    );
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
            isOpen={this.state.isOpen[1]}
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
            {this.getOpenStackedModals(0)}
          </ModalStack>
        </Example>

        <Example title="ModalStack in ModalOverlay">
          <CallOutButton
            label="Open 1st Level Modal"
            onClick={() => this.onOpen.bind(this)(21)}
          />
          <ModalOverlay
            isOpen={this.state.isOpen[21]}
          >
            <ModalStack>
              {this.getOpenStackedModals(1)}
            </ModalStack>
          </ModalOverlay>
        </Example>
      </Page>
    );
  }

}
