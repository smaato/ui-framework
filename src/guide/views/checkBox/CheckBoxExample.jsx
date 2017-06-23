
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
            checked={this.state.isChecked}
            data="Checkbox Data"
            id="checkboxId"
            onClick={this.onClickCheckBox}
          />
        </Example>

        <Example title="With readonly">
          <CheckBox
            checked={this.state.isChecked}
            data="Checkbox Data"
            id="checkboxIdReadonly"
            isReadonly
            onClick={this.onClickCheckBox}
          />
        </Example>

        <Example title="Error state">
          <CheckBox
            data="Checkbox Data"
            id="checkboxIdError"
            isError
            onClick={this.onClickCheckBox}
          />
        </Example>
      </Page>
    );
  }

}

CheckBoxExample.propTypes = {
  route: PropTypes.object.isRequired,
};
