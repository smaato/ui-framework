
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  DescriptionText,
  Text,
} from '../../../framework/framework';

export default class TextExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <Text rhythm={Text.RHYTHM.XSMALL}>A title</Text>
          <DescriptionText>Descriptive information goes below</DescriptionText>
        </Example>

        <Example title="Text">
          <Text>This is some text.</Text>
        </Example>

        <Example title="DescriptionText">
          <DescriptionText>This is description text.</DescriptionText>
        </Example>

      </Page>
    );
  }

}

TextExample.propTypes = {
  route: PropTypes.object.isRequired,
};
