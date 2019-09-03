
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  RadioButtons,
} from '../../../framework/framework';

export default class RadioButtonsExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedElement: 0,
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(newElementIndex) {
    this.setState({
      selectedElement: newElementIndex,
    });
  }

  render() {
    const elements = [
      {
        label: 'Label 1',
        value: 1,
      },
      {
        label: 'Label 2',
        value: 2,
      },
      {
        label: 'Label 3',
        value: 3,
      },
    ];

    return (
      <Page title={this.props.route.name}>
        <Example>
          <RadioButtons
            elements={elements}
            onSelect={this.onSelect}
            name="radioButtonsWithPreselection"
            selectedElement={this.state.selectedElement}
          />
        </Example>
      </Page>
    );
  }
}

RadioButtonsExample.propTypes = {
  route: PropTypes.any,
};
