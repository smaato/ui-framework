
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
  IconLink,
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

    this.STACKED_MODAL_WIDTH = 750;

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
        width={this.STACKED_MODAL_WIDTH}
      >
        <ModalHeader
          title="1st Level Modal"
          onClose={this.removeModalFromStack}
          closeTopModalLabel="Cancel and go back to 1st level"
        />
        <ModalBody>
          Modal content.
        </ModalBody>
        <ModalFooter
          right={
            <CallOutButton
              label="Open 2nd Level Modal"
              onClick={this.addModalToStack}
            />
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
          title="2nd Level Modal"
          onClose={this.removeModalFromStack}
          closeTopModalLabel="Cancel and go back to 2nd level"
        />
        <ModalBody>
          Modal content.
        </ModalBody>
        <ModalFooter
          right={
            <CallOutButton
              label="Open 3rd Level Modal"
              onClick={this.addModalToStack}
            />
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
          title="3rd Level Modal"
          onClose={this.removeModalFromStack}
          closeTopModalLabel="Cancel and go back to 3rd level"
        />
        <ModalBody>
          Modal content.
        </ModalBody>
        <ModalFooter
          right={
            <CallOutButton
              label="Open 4th Level Modal"
              onClick={this.addModalToStack}
            />
          }
        />
      </Modal>,

      <Modal
        key={3}
        width={this.STACKED_MODAL_WIDTH}
      >
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
    return (
      <Page title={this.props.route.name}>
        <Example isClear>
          <Modal>
            <ModalHeader
              title="Modal Title"
              icon={<IconLink/>}
            />
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
                <BasicButton
                  key="footer_left_1"
                  iconClasses="glyphicons-bin"
                  label="Delete"
                />,
              ]}
              right={[
                <HollowButton
                  key="footer_right_1"
                  label="Cancel"
                />,
                <PrimaryButton
                  key="footer_right_2"
                  label="Save"
                />,
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
              <HollowButton label="No, Cancel" />
              <PrimaryButton label="Yes, Continue" />
            </ModalConfirmationFooter>
          </Modal>
        </Example>

        <Example title="In ModalOverlay">
          <CallOutButton
            label="Open Modal"
            onClick={this.onOpenModal}
          />
          <ModalOverlay
            isOpen={this.state.isModalOpen}
          >
            <Modal>
              <ModalHeader
                title="Modal Title"
                onClose={this.onCloseModal}
              />
              <ModalBody>
                <div style={{ height: 400 }}></div>
              </ModalBody>
              <ModalFooter
                right={[
                  <HollowButton
                    key="modal_overlay_footer_right_1"
                    label="Cancel"
                    onClick={this.onCloseModal}
                  />,
                  <PrimaryButton
                    key="modal_overlay_footer_right_2"
                    label="Submit"
                  />,
                ]}
              />
            </Modal>
          </ModalOverlay>
        </Example>

        <Example title="ModalStack">
          <CallOutButton
            label="Open ModalStack"
            onClick={this.addModalToStack}
          />
          <ModalOverlay
            isOpen={this.state.isModalStackOpen}
          >
            <ModalStack>
              {this.renderModalStack()}
            </ModalStack>
          </ModalOverlay>
        </Example>
      </Page>
    );
  }

}

ModalExample.propTypes = {
  route: PropTypes.object.isRequired,
};
