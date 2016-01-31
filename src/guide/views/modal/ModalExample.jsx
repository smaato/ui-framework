
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
      isModalOpen: false,
      isModalStackOpen: false,
      stackedModalCount: 0,
    };
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
            onClose={this.removeModalFromStack.bind(this)}
          />
        )}
        body={(
          <ModalBody>
            <CallOutButton
              label="Open 2nd Level Modal"
              onClick={this.addModalToStack.bind(this)}
            />
          </ModalBody>
        )}
        key={0}
      />,

      <Modal
        header={(
          <ModalHeader
            title="2nd Level Modal"
            onClose={this.removeModalFromStack.bind(this)}
          />
        )}
        body={(
          <ModalBody>
            <CallOutButton
              label="Open 3rd Level Modal"
              onClick={this.addModalToStack.bind(this)}
            />
          </ModalBody>
        )}
        key={1}
      />,

      <Modal
        header={(
          <ModalHeader
            title="3rd Level Modal"
            onClose={this.removeModalFromStack.bind(this)}
          />
        )}
        body={(
          <ModalBody>
            <CallOutButton
              label="Open 4th Level Modal"
              onClick={this.addModalToStack.bind(this)}
            />
          </ModalBody>
        )}
        key={2}
      />,

      <Modal
        header={(
          <ModalHeader
            title="4th Level Modal"
            onClose={this.removeModalFromStack.bind(this)}
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
                icon={<IconCog/>}
              />
            )}
            body={(
              <ModalBody>
                <div style={{height: 110}}></div>
              </ModalBody>
            )}
            footer={(
              <ModalFooter
                left={(
                  <BasicButton
                    iconClasses="glyphicons-bin"
                    label="Delete"
                  />
                )}
              >
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
            onClick={this.onOpenModal.bind(this)}
          />
          <ModalOverlay
            isOpen={this.state.isModalOpen}
          >
            <Modal
              header={(
                <ModalHeader
                  title="Modal Title"
                  onClose={this.onCloseModal.bind(this)}
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
                    onClick={this.onCloseModal.bind(this)}
                  />
                  <PrimaryButton
                    label="Submit"
                  />
                </ModalFooter>
              )}
            />
          </ModalOverlay>
        </Example>

        <Example title="ModalStack">
          <CallOutButton
            label="Open ModalStack"
            onClick={this.addModalToStack.bind(this)}
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
