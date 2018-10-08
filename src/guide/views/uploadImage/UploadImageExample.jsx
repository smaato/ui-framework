
import PropTypes from 'prop-types';
import React from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  FieldMessage,
  UploadImage,
} from '../../../framework/framework';

class UploadImageExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      requiredHeight: 150,
      requiredWidth: 210,
    };
    this.validateImage = this.validateImage.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(file, image) {
    console.log('this is the file', file); // eslint-disable-line
    console.log('this is the image', image); // eslint-disable-line
  }

  validateImage(image) {
    const hasErrors = (image.width !== this.state.requiredWidth ||
          image.height !== this.state.requiredHeight);

    this.setState({
      hasErrors,
    });

    return hasErrors;
  }

  renderErrorMessage() {
    const message = `The required size is ${this.state.requiredWidth}x` +
    `${this.state.requiredHeight}`;
    if (this.state.hasErrors) {
      return (<FieldMessage message={message} />);
    }
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example title="Without Validation">
          <UploadImage
            onChange={this.onChangeHandler}
          />
        </Example>
        <Example title="With Validation">
          <UploadImage
            onChange={this.onChangeHandler}
            validateImage={this.validateImage}
          />
          {this.renderErrorMessage()}
        </Example>

      </Page>
    );
  }
}

UploadImageExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default UploadImageExample;
