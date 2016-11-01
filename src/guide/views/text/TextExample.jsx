
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
  Heading,
} from '../../../framework/framework';

export default class TextExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rhythms = Object.keys(Text.RHYTHM).map(key => (
      <div
        style={{
          backgroundColor: '#f0f0f0',
          marginBottom: 10,
        }}
      >
        <Text
          key={key}
          rhythm={Text.RHYTHM[key]}
        >
          '{key.toLowerCase()}' rhythm
        </Text>
        <DescriptionText>
          This text shows you the space between the lines.
        </DescriptionText>
      </div>
    ));

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

        <Example title="Rhythms">
          {rhythms}
        </Example>

        <Example title="Heading large">
          <Heading>This is heading text.</Heading>
        </Example>

        <Example title="Heading small">
          <Heading size={Heading.SIZE.SMALL}>
            This is small heading text.
          </Heading>
        </Example>

      </Page>
    );
  }

}

TextExample.propTypes = {
  route: PropTypes.object.isRequired,
};
