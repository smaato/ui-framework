
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
  HollowButton,
  PrimaryButton,
  IconLink,
  Modal,
  ModalBody,
  ModalConfirmationBody,
  ModalConfirmationFooter,
  ModalHeader,
  ModalOverlay,
  ModalStack,
  FormFooter,
} from '../../../framework/framework';

class ModalExample extends Component {

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
        header={(
          <ModalHeader
            title="1st Level Modal"
            onClose={this.removeModalFromStack}
          />
        )}
        body={(
          <ModalBody>
            <CallOutButton
              label="Open 2nd Level Modal"
              onClick={this.addModalToStack}
            />
          </ModalBody>
        )}
        key={0}
      />,

      <Modal
        header={(
          <ModalHeader
            title="2nd Level Modal"
            onClose={this.removeModalFromStack}
          />
        )}
        body={(
          <ModalBody>
            <CallOutButton
              label="Open 3rd Level Modal"
              onClick={this.addModalToStack}
            />
          </ModalBody>
        )}
        key={1}
      />,

      <Modal
        header={(
          <ModalHeader
            title="3rd Level Modal"
            onClose={this.removeModalFromStack}
          />
        )}
        body={(
          <ModalBody>
            <CallOutButton
              label="Open 4th Level Modal"
              onClick={this.addModalToStack}
            />
          </ModalBody>
        )}
        key={2}
      />,

      <Modal
        header={(
          <ModalHeader
            title="4th Level Modal"
            onClose={this.removeModalFromStack}
          />
        )}
        body={(
          <ModalBody>
            <p>Notice that the first level modal is no longer visible.</p>
          </ModalBody>
        )}
        key={3}
      />,
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
          <Modal
            header={(
              <ModalHeader
                title="Modal Title"
                icon={<IconLink/>}
              />
            )}
            body={(
              <ModalBody>
                <div style={{ height: 110 }}></div>
              </ModalBody>
            )}
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
        </Example>

        <Example title="ModalConfirmation" isClear>
          <Modal
            body={(
              <ModalConfirmationBody>
                This is a confirmation modal with a message that wraps to
                multiple lines. Are you sure you want to do that?
              </ModalConfirmationBody>
            )}
            footer={(
              <ModalConfirmationFooter>
                <HollowButton label="No, Cancel" />
                <PrimaryButton label="Yes, Continue" />
              </ModalConfirmationFooter>
            )}
          />
        </Example>

        <Example title="In ModalOverlay">
          <CallOutButton
            label="Open Modal"
            onClick={this.onOpenModal}
          />
          <ModalOverlay
            isOpen={this.state.isModalOpen}
          >
            <Modal
              header={(
                <ModalHeader
                  title="Modal Title"
                  onClose={this.onCloseModal}
                />
              )}
              body={(
                <ModalBody>
                  <div style={{ height: 400 }}></div>
                </ModalBody>
              )}
              footer={(
                <FormFooter
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
              )}
            />
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

export default ModalExample;
