
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  ViewHeader,
  ViewHeaderNav,
} from '../../../framework/framework.js';

export default class ViewHeaderExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <ViewHeader left={<ViewHeaderNav/>} />
        </Example>

        <Example title="ViewHeaderNav" isDark>
          <Text>Allows the user to add a navigation to the ViewHeader.</Text>
          <ViewHeaderNav />
        </Example>

      </Page>
    );
  }

}
