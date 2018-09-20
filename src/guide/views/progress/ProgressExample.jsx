
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  ModalOverlay,
  Progress,
  ProgressModal,
  ProgressSuccess,
} from '../../../framework/framework';

export default class ProgressExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progressType: ProgressModal.TYPE.PROGRESS,
      isProgressModalOpen: false,
    };

    this.onOpenProgressModal = this.onOpenProgressModal.bind(this);
  }

  onOpenProgressModal() {
    this.setState({
      isProgressModalOpen: true,
    });

    // Show success.
    setTimeout(() => {
      this.setState({
        progressType: ProgressModal.TYPE.SUCCESS,
      });

      // Close modal.
      setTimeout(() => {
        this.setState({
          progressType: ProgressModal.TYPE.PROGRESS,
          isProgressModalOpen: false,
        });
      }, 2000);
    }, 1000);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Progress />
        </Example>

        <Example title="Small">
          <Progress size={Progress.SIZE.SMALL} />
        </Example>

        <Example title="ProgressSuccess">
          <ProgressSuccess />
        </Example>

        <Example title="ProgressModal">
          <button onClick={this.onOpenProgressModal}>
            Open Modal
          </button>
          <ModalOverlay
            isOpen={this.state.isProgressModalOpen}
          >
            <ProgressModal type={this.state.progressType} />
          </ModalOverlay>
        </Example>
      </Page>
    );
  }

}

ProgressExample.propTypes = {
  route: PropTypes.object.isRequired,
};
