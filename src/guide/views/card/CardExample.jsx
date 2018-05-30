
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Card,
  CardHolder,
} from '../../../framework/framework';

const CardExample = (props) => {
  const longDescription = `Do not go gentle into that good night,
  Old age should burn and
  rave at close of day;
  Rage, rage against the dying of the light.`;

  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <Page title={props.route.name}>
      <Example>
        <CardHolder>
          {arr.map(i => <Card
            description={longDescription}
            hightlightText={`Highlight ${i}`}
            imageSrc="http://pipsum.com/210x150.jpg"
            key={i}
            subtitle="This is a subtitle and this is also a part of the same"
            title={`Card ${i}`}
            tooltipText={`Tooltip ${i}`}
          />)}
        </CardHolder>
      </Example>
    </Page>
  );
};

CardExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default CardExample;
