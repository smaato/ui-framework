
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  BasicButton,
  CallOutButton,
  Column,
  ColumnLayout,
  Dropdown,
  Form,
  HollowButton,
  Label,
  Modal,
  ModalBody,
  ModalConfirmationBody,
  ModalConfirmationFooter,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalStack,
  PrimaryButton,
  Text,
  TextInput,
  VerticalLayout,
} from '../../../framework/framework';

import {
  EscapeKeyHandler,
} from '../../../framework/services';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isModalStackOpen: false,
      stackedModalCount: 0,
    };

    this.STACKED_MODAL_WIDTH = 400;

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onEscapeKey = this.onEscapeKey.bind(this);
    this.addModalToStack = this.addModalToStack.bind(this);
    this.removeModalFromStack = this.removeModalFromStack.bind(this);
  }

  componentDidMount() {
    this.escapeKeyHandler = new EscapeKeyHandler(this.onEscapeKey);
  }

  componentWillUnmount() {
    this.escapeKeyHandler.removeListener();
  }

  onOpenModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  onCloseModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  onEscapeKey() {
    if (this.state.isModalOpen) {
      this.onCloseModal();
    }

    if (this.state.isModalStackOpen) {
      this.removeModalFromStack();
    }
  }

  addModalToStack() {
    this.setState({
      isModalStackOpen: true,
      stackedModalCount: this.state.stackedModalCount + 1,
    });
  }

  removeModalFromStack() {
    const modalCount = this.state.stackedModalCount - 1;
    this.setState({
      isModalStackOpen: modalCount !== 0,
      stackedModalCount: modalCount,
    });
  }

  renderModalStack() {
    const modalStackSequence = [
      <Modal
        key={0}
        index={0}
        stackCount={this.state.stackedModalCount}
        onCloseTopModal={this.removeModalFromStack}
        width={this.STACKED_MODAL_WIDTH}
      >
        <ModalHeader
          type={ModalHeader.TYPE.ENDPOINT}
          onClose={this.removeModalFromStack}
          closeTopModalLabel="Cancel and go back to 1st level"
        >
          1st Level Modal
        </ModalHeader>
        <ModalBody>
          <div>
            <Text rhythm={Text.RHYTHM.SMALL}>
              This dropdown demonstrates two things: 1) it isn&apos;t
              cropped when it&apos;s open, 2) it isn&apos;t cropped when
              it&apos;s wider than the modal.
            </Text>
          </div>
          <ColumnLayout>
            <Column width={4}>
              <Label isAlignedWithField>
                Dropdown
              </Label>
            </Column>
            <Column width={8}>
              <Dropdown
                options={[{
                  name: 'Apple',
                }, {
                  name: 'Berry',
                }, {
                  name: 'Corn',
                }, {
                  name: 'Daffodil',
                }, {
                  name: 'Eggplant',
                }]}
                onSelect={() => undefined} // eslint-disable-line react/jsx-no-bind
                labelProvider={() => // eslint-disable-line react/jsx-no-bind
                  `This dropdown should be wider than this modal, but it should
                  not be cropped.`
                }
                optionLabelProvider={option => option.name} // eslint-disable-line react/jsx-no-bind
              />
            </Column>
          </ColumnLayout>
        </ModalBody>
        <ModalFooter
          right={
            <CallOutButton onClick={this.addModalToStack}>
              Open 2nd Level Modal
            </CallOutButton>
          }
        />
      </Modal>,
      <Modal
        key={1}
        index={1}
        stackCount={this.state.stackedModalCount}
        onCloseTopModal={this.removeModalFromStack}
        width={this.STACKED_MODAL_WIDTH}
      >
        <ModalHeader
          type={ModalHeader.TYPE.ENDPOINT}
          onClose={this.removeModalFromStack}
          closeTopModalLabel="Cancel and go back to 2nd level"
        >
          2nd Level Modal
        </ModalHeader>
        <ModalBody>
          Modal content.
        </ModalBody>
        <ModalFooter
          right={
            <CallOutButton onClick={this.addModalToStack}>
              Open 3rd Level Modal
            </CallOutButton>
          }
        />
      </Modal>,
      <Modal
        key={2}
        index={2}
        stackCount={this.state.stackedModalCount}
        onCloseTopModal={this.removeModalFromStack}
        width={this.STACKED_MODAL_WIDTH}
      >
        <ModalHeader
          type={ModalHeader.TYPE.ENDPOINT}
          onClose={this.removeModalFromStack}
          closeTopModalLabel="Cancel and go back to 3rd level"
        >
          3rd Level Modal
        </ModalHeader>
        <ModalBody>
          Modal content.
        </ModalBody>
        <ModalFooter
          right={
            <CallOutButton onClick={this.addModalToStack}>
              Open 4th Level Modal
            </CallOutButton>
          }
        />
      </Modal>,

      <Modal
        key={3}
        width={this.STACKED_MODAL_WIDTH}
      >
        <ModalHeader
          onClose={this.removeModalFromStack}
        >
          4th Level Modal
        </ModalHeader>
        <ModalBody>
          <p>Notice that the first level modal is no longer visible.</p>
        </ModalBody>
        <ModalFooter
          right={
            <div />
          }
        />
      </Modal>,
    ];

    const stackedModals = [];

    for (let i = 0; i < this.state.stackedModalCount; i += 1) {
      stackedModals.push(modalStackSequence[i]);
    }

    return stackedModals;
  }

  render() {
    const modalHeaders = Object.keys(ModalHeader.TYPE).map(key =>
      <ModalHeader
        key={key}
        type={ModalHeader.TYPE[key]}
      >
        {key}
      </ModalHeader>
    );

    return (
      <Page title={this.props.route.name}>
        <Example isClear>
          <Modal>
            <ModalHeader
              type={ModalHeader.TYPE.ENDPOINT}
            >
              Endpoint
            </ModalHeader>
            <ModalBody>
              <Form>
                <VerticalLayout>
                  <ColumnLayout>
                    <Column width={2}>
                      <Label isAlignedWithField>First Name</Label>
                    </Column>
                    <Column width={10}>
                      <TextInput isFullWidth />
                    </Column>
                  </ColumnLayout>

                  <ColumnLayout>
                    <Column width={2}>
                      <Label isAlignedWithField>Last Name</Label>
                    </Column>
                    <Column width={10}>
                      <TextInput isFullWidth />
                    </Column>
                  </ColumnLayout>
                </VerticalLayout>
              </Form>
            </ModalBody>
            <ModalFooter
              left={[
                <BasicButton key="footer_left_1">
                  Delete
                </BasicButton>,
              ]}
              right={[
                <HollowButton key="footer_right_1">
                  Cancel
                </HollowButton>,
                <PrimaryButton key="footer_right_2">
                  Save
                </PrimaryButton>,
              ]}
            />
          </Modal>
        </Example>

        <Example title="ModalConfirmation" isClear>
          <Modal>
            <ModalConfirmationBody>
              This is a confirmation modal with a message that wraps to
              multiple lines. Are you sure you want to do that?
            </ModalConfirmationBody>
            <ModalConfirmationFooter>
              <HollowButton>
                No, Cancel
              </HollowButton>
              <PrimaryButton>
                Yes, Continue
              </PrimaryButton>
            </ModalConfirmationFooter>
          </Modal>
        </Example>

        <Example title="In ModalOverlay">
          <button onClick={this.onOpenModal}>
            Open Modal
          </button>
          <ModalOverlay
            isOpen={this.state.isModalOpen}
          >
            <Modal>
              <ModalHeader onClose={this.onCloseModal}>
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div style={{ height: 400 }} />
              </ModalBody>
              <ModalFooter
                right={[
                  <HollowButton
                    key="modal_overlay_footer_right_1"
                    onClick={this.onCloseModal}
                  >
                    Cancel
                  </HollowButton>,
                  <PrimaryButton key="modal_overlay_footer_right_2">
                    Submit
                  </PrimaryButton>,
                ]}
              />
            </Modal>
          </ModalOverlay>
        </Example>

        <Example title="ModalStack">
          <button onClick={this.addModalToStack}>
            Open ModalStack
          </button>
          <ModalOverlay
            isOpen={this.state.isModalStackOpen}
          >
            <ModalStack>
              {this.renderModalStack()}
            </ModalStack>
          </ModalOverlay>
        </Example>

        <Example title="ModalHeader">
          {modalHeaders}
        </Example>
      </Page>
    );
  }

}

ModalExample.propTypes = {
  route: PropTypes.object.isRequired,
};
