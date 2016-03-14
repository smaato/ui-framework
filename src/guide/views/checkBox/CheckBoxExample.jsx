
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { CheckBox } from '../../../framework/framework';

export default class CheckBoxExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: true,
    };

    this.onClickCheckBox = this.onClickCheckBox.bind(this);
  }

  onClickCheckBox(isChecked, id, data) {
    window.alert(`${id} ${data}`); // eslint-disable-line no-alert
    this.setState({
      isChecked,
    });
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <CheckBox
            id="checkboxId"
            onClick={this.onClickCheckBox}
            checked={this.state.isChecked}
            data="Checkbox Data"
          />
        </Example>
      </Page>
    );
  }

}

CheckBoxExample.propTypes = {
  route: PropTypes.object.isRequired,
};
