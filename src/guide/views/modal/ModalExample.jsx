
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  BasicButton,
  CallOutButton,
  HollowButton,
  PrimaryButton,
  IconLink,
  Modal,
  ModalConfirmationBody,
  ModalConfirmationFooter,
  ModalHeader,
  ModalOverlay,
  ModalStack,
  Form,
  FormFooter,
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
      <Modal>
        <ModalHeader
          title="1st Level Modal"
          onClose={this.removeModalFromStack}
        />
        <CallOutButton
          label="Open 2nd Level Modal"
          onClick={this.addModalToStack}
        />
      </Modal>,

      <Modal>
        <ModalHeader
          title="2nd Level Modal"
          onClose={this.removeModalFromStack}
        />
        <CallOutButton
          label="Open 3rd Level Modal"
          onClick={this.addModalToStack}
        />
      </Modal>,

      <Modal>
        <ModalHeader
          title="3rd Level Modal"
          onClose={this.removeModalFromStack}
        />
        <CallOutButton
          label="Open 4th Level Modal"
          onClick={this.addModalToStack}
        />
      </Modal>,

      <Modal>
        <ModalHeader
          title="4th Level Modal"
          onClose={this.removeModalFromStack}
        />
        <p>Notice that the first level modal is no longer visible.</p>
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
              key={1}
              title="Modal Title"
              icon={<IconLink/>}
            />
            <Form
              key={2}
              body={
                <div style={{ height: 110 }}></div>
              }
              footer={
                <FormFooter
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
              }
            />
          </Modal>
        </Example>

        <Example title="ModalConfirmation" isClear>
          <Modal>
            <div key={1}>
              <ModalConfirmationBody>
                This is a confirmation modal with a message that wraps to
                multiple lines. Are you sure you want to do that?
              </ModalConfirmationBody>
              <ModalConfirmationFooter>
                <HollowButton label="No, Cancel" />
                <PrimaryButton label="Yes, Continue" />
              </ModalConfirmationFooter>
            </div>
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
                key={1}
                title="Modal Title"
                onClose={this.onCloseModal}
              />
              <Form
                key={2}
                body={(
                  <div style={{ height: 400 }}></div>
                )}
                footer={(
                  <FormFooter
                    right={[
                      <HollowButton
                        key="footer_right_1"
                        label="Cancel"
                        onClick={this.onCloseModal}
                      />,
                      <PrimaryButton
                        key="footer_right_2"
                        label="Submit"
                      />,
                    ]}
                  />
                )}
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
