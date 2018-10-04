
import PropTypes from 'prop-types';
import React from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  UploadImage,
} from '../../../framework/framework';

const UploadImageExample = (props) => {
  function onChangeHandler(image) {
    window.alert('this is the image', image); // eslint-disable-line no-alert
  }

  return (
    <Page title={props.route.name}>
      <Example>
        <UploadImage
          requiredHeight={150}
          requiredWidth={210}
          onChange={onChangeHandler}
        />
      </Example>

    </Page>
  );
};

UploadImageExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default UploadImageExample;
