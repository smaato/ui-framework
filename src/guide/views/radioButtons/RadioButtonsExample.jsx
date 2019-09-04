
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Text,
  RadioButtons,
  RadioButtonItem,
} from '../../../framework/framework';

export default class RadioButtonsExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedElement: null,
    };

    this.elements = [
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

    this.onSelect = this.onSelect.bind(this);
    this.renderChildItem = this.renderChildItem.bind(this);
  }

  onSelect(element) {
    this.setState({
      selectedElement: element,
    });
  }

  renderChildItem(element, onSelect) {
    return (
      <RadioButtonItem
        element={element}
        isActive={this.state.selectedElement === element}
        onSelect={onSelect}
      >
        <Text>{element.label}</Text>
      </RadioButtonItem>
    );
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <RadioButtons
            elements={this.elements}
            onSelect={this.onSelect}
            elementProvider={this.renderChildItem}
          />
        </Example>
      </Page>
    );
  }
}

RadioButtonsExample.propTypes = {
  route: PropTypes.any,
};
