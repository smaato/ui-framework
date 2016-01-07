
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
} from '../../../framework/framework';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
    };
  }

  onOpen(exampleNumber) {
    const state = {};
    state[`isOpen${exampleNumber}`] = true;
    this.setState(state);
  }

  onClose(exampleNumber) {
    const state = {};
    state[`isOpen${exampleNumber}`] = false;
    this.setState(state);
  }

  onSubmit(exampleNumber) {
    const state = {};
    state[`isOpen${exampleNumber}`] = false;
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
            <Modal
              header={(
                <ModalHeader
                  title="1st Level Modal"
                  onClose={() => this.onClose.bind(this)(2)}
                />
              )}
              body={(
                <ModalBody>
                  <div style={{height: 100}}>
                    <CallOutButton
                      label="Open 2nd Level Modal"
                      onClick={() => this.onOpen.bind(this)(3)}
                    />
                  </div>
                </ModalBody>
              )}
            />
            <ModalOverlay
              isOpen={this.state.isOpen3}
              noBackground
            >
              <Modal
                isStacked
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
              <ModalOverlay
                isOpen={this.state.isOpen4}
                noBackground
              >
                <Modal
                  isStacked
                  header={(
                    <ModalHeader
                      title="3rd Level Modal"
                      onClose={() => this.onClose.bind(this)(4)}
                    />
                  )}
                  body={(
                    <ModalBody>
                      <p>I am 3rd level modal.</p>
                    </ModalBody>
                  )}
                />
              </ModalOverlay>
            </ModalOverlay>
          </ModalOverlay>
        </Example>
      </Page>
    );
  }

}
