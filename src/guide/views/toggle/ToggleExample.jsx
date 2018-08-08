
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { Toggle } from '../../../framework/framework';

export default class ToggleExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: true,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(isChecked) {
    this.setState({
      isChecked,
    });
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Toggle
            isDefaultChecked
            onChange={this.onChange}
          />
        </Example>

        <Example title="With labels">
          <Toggle
            isDefaultChecked
            isLabel
            onChange={this.onChange}
          />
        </Example>
      </Page>
    );
  }

}

ToggleExample.propTypes = {
  route: PropTypes.object.isRequired,
};
