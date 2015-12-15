
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CallOutButton,
  PrimaryButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '../../../framework/framework.js';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
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
        <Example>
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
                  <p>Lorem ipsum dolor sit amet, soleat dignissim abhorreant qui at, at tollit sensibus corrumpit ius, sea ut quod iudico nemore. Ea sea novum aperiam, id mea ornatus pericula interesset. Duo eleifend deterruisset te, movet tation menandri ut his. Cu cum duis vitae minimum, ea simul ancillae voluptua cum, ei eam decore nonumy.</p>
                  <p>Mel ne feugiat insolens, vel id viris aperiri. Id discere antiopam mea, mei at brute porro. Ei his luptatum sensibus deseruisse. No assum omittam vel. Eos equidem insolens no, ne sed eros adipisci reprehendunt.</p>
                </ModalBody>
              )}
              footer={(
                <ModalFooter>
                  <ModalCloseButton
                    label="Close Modal"
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

        <Example title="Not wrapped in ModalOverlay." isDark>
          <Modal
            header={(
              <ModalHeader
                title="Add"
              />
            )}
            body={(
              <ModalBody>
                <p>Lorem ipsum dolor sit amet, soleat dignissim abhorreant qui at, at tollit sensibus corrumpit ius, sea ut quod iudico nemore. Ea sea novum aperiam, id mea ornatus pericula interesset. Duo eleifend deterruisset te, movet tation menandri ut his. Cu cum duis vitae minimum, ea simul ancillae voluptua cum, ei eam decore nonumy.</p>
                <p>Mel ne feugiat insolens, vel id viris aperiri. Id discere antiopam mea, mei at brute porro. Ei his luptatum sensibus deseruisse. No assum omittam vel. Eos equidem insolens no, ne sed eros adipisci reprehendunt.</p>
              </ModalBody>
            )}
            footer={(
              <ModalFooter>
                <ModalCloseButton
                />
                <PrimaryButton
                  label="Save"
                />
              </ModalFooter>
            )}
          />
        </Example>

        <Example title="Not wrapped in ModalOverlay. Modal with just ModalBody." isDark>
          <Modal
            body={(
              <ModalBody>
                <p>Lorem ipsum dolor sit amet, soleat dignissim abhorreant qui at, at tollit sensibus corrumpit ius, sea ut quod iudico nemore. Ea sea novum aperiam, id mea ornatus pericula interesset. Duo eleifend deterruisset te, movet tation menandri ut his. Cu cum duis vitae minimum, ea simul ancillae voluptua cum, ei eam decore nonumy.</p>
                <p>Mel ne feugiat insolens, vel id viris aperiri. Id discere antiopam mea, mei at brute porro. Ei his luptatum sensibus deseruisse. No assum omittam vel. Eos equidem insolens no, ne sed eros adipisci reprehendunt.</p>
                <p>Minimum electram constituto id vis. Inermis eligendi delectus sea eu, commune ullamcorper conclusionemque ius cu, his te offendit platonem adipiscing. Id ceteros lucilius signiferumque pri. Ad unum adhuc vim, ut mel doming antiopam hendrerit. No vim utroque posidonium. Ubique phaedrum deserunt mei in.</p>
                <p>Dicam omnium molestie an pro, vix ne alii splendide, nam te albucius detraxit. Sea id nostrud meliore noluisse, vim cu congue possit democritum. Nec no falli discere. Eum cu legimus explicari deseruisse. Ut eum viris exerci mnesarchum, mei te mazim equidem elaboraret. Usu ludus theophrastus intellegebat eu, ex qui enim ullum aeque, qui urbanitas adversarium definitionem ut.</p>
              </ModalBody>
            )}
          />
        </Example>

        <Example title="ModalOverlay only. No Modal.">
          <CallOutButton
            label="Open ModalOverlay"
            onClick={() => this.onOpen.bind(this)(2)}
          />
          <ModalOverlay
            isOpen={this.state.isOpen2}
          >
            <div>
              <p>
                <img src="http://pipsum.com/400x300.jpg"/>
              </p>
              <PrimaryButton
                label="Close ModalOverlay"
                onClick={() => this.onClose.bind(this)(2)}
              />
            </div>
          </ModalOverlay>
        </Example>
      </Page>
    );
  }

}
