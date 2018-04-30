
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Card,
} from '../../../framework/framework';

const CardExample = (props) => {
  const longDescription = `Do not go gentle into that good night,
  Old age should burn and
  rave at close of day;
  Rage, rage against the dying of the light.`;

  return (
    <Page title={props.route.name}>
      <Example title="Card with long text">
        <Card
          imageSrc="http://pipsum.com/210x150.jpg"
          title="This is a title"
          subtitle="This is a subtitle and this is also a part of the same"
          description={longDescription}
          hightlightText="Highlight"
          tooltipText="Tooltip"
        />
      </Example>
      <Example title="Card without long text">
        <Card
          imageSrc="http://pipsum.com/210x150.jpg"
          title="This is a title"
          subtitle="This is a subtitle"
          description="Do not go gentle"
          hightlightText="Highlight"
          tooltipText="Tooltip Text and its a long one"
        />
      </Example>
    </Page>
  );
};

CardExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default CardExample;
