
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Title,
} from '../../components/page/Page.jsx';

import { CheckBox } from '../../../framework/framework.js';

export default class CheckBoxExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Title>Check box</Title>
        <Example>
          <CheckBox id="checkboxExample" />
        </Example>
      </Page>
    );
  }

}
