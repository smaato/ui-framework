
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  PickedSummary,
} from '../../../framework/framework';

const PickedListExample = (props) => {
  const examples = Object.keys(PickedSummary.TYPE).map(key =>
    <Example
      title={key}
      key={key}
    >
      <PickedSummary type={PickedSummary.TYPE[key]}>
        {key}
      </PickedSummary>
    </Example>
  );

  return (
    <Page title={props.route.name}>
      {examples}
    </Page>
  );
};

PickedListExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default PickedListExample;
