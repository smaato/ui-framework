
import PropTypes from 'prop-types';
import React from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  DescriptionText,
  Text,
  Heading,
} from '../../../framework/framework';

const TextExample = (props) => {
  const rhythms = Object.keys(Text.RHYTHM).map(key => (
    <div
      key={key}
      style={{
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
      }}
    >
      <Text rhythm={Text.RHYTHM[key]}>
        &apos;{key.toLowerCase()}&apos; rhythm
      </Text>
      <DescriptionText>
        This text shows you the space between the lines.
      </DescriptionText>
    </div>
  ));

  return (
    <Page title={props.route.name}>

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
};

TextExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default TextExample;
