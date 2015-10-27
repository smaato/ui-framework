
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Title,
} from '../../components/page/Page.jsx';

import { Spinner } from '../../../framework/framework.js';

export default class SpinnerExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>

        <Title>Spinner</Title>

        <Example>
          <Spinner />
        </Example>

      </Page>
    );
  }

}
