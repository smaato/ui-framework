
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  BasicButton,
  CallOutButton,
  Form,
  HollowButton,
  LabeledControl,
  Modal,
  ModalBody,
  ModalConfirmationBody,
  ModalConfirmationFooter,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalStack,
  PrimaryButton,
  TextInput,
  VerticalLayout,
} from '../../../framework/framework';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isModalStackOpen: false,
      stackedModalCount: 0,
    };

    this.addModalToStack = this.addModalToStack.bind(this);
    this.removeModalFromStack = this.removeModalFromStack.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
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
      >
        <ModalHeader
          onClose={this.removeModalFromStack}
          closeTopModalLabel="Cancel and go back to 1st level"
        >
          1st Level Modal
        </ModalHeader>
        <ModalBody>
          Modal content.
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
      >
        <ModalHeader
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
      >
        <ModalHeader
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

      <Modal key={3}>
        <ModalHeader
          title="4th Level Modal"
          onClose={this.removeModalFromStack}
        />
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

    for (let i = 0; i < this.state.stackedModalCount; i++) {
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
                  <LabeledControl
                    label="First Name"
                    layout={LabeledControl.LAYOUT.ONE_SIXTH}
                  >
                    <TextInput isFullWidth />
                  </LabeledControl>
                  <LabeledControl
                    label="Last Name"
                    layout={LabeledControl.LAYOUT.ONE_SIXTH}
                  >
                    <TextInput isFullWidth />
                  </LabeledControl>
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
                <div style={{ height: 400 }}></div>
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
