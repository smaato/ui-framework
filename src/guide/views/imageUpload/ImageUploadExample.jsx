
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  FieldMessage,
  ImageUpload,
} from '../../../framework/framework';

class ImageUploadExample extends Component {
  constructor(props) {
    super(props);

    this.IMAGE = 'http://pipsum.com/210x150.jpg';
    this.HEIGHT = 150;
    this.WIDTH = 210;
    this.state = {
      hasErrors: false,
    };
    this.validateImage = this.validateImage.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(file, image) {
    console.log('this is the file', file); // eslint-disable-line
    console.log('this is the image', image); // eslint-disable-line
  }

  validateImage(image) {
    const hasErrors = (image.width !== this.WIDTH ||
          image.height !== this.HEIGHT);

    this.setState({
      hasErrors,
    });

    return hasErrors;
  }

  renderErrorMessage() {
    const message = `The required size is ${this.WIDTH}x` +
    `${this.HEIGHT}`;
    if (this.state.hasErrors) {
      return (<FieldMessage message={message} />);
    }
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example title="Without Validation">
          <ImageUpload
            onChange={this.onChangeHandler}
          />
        </Example>
        <Example title="With Validation">
          <ImageUpload
            onChange={this.onChangeHandler}
            validateImage={this.validateImage}
          />
          {this.renderErrorMessage()}
        </Example>
        <Example title="Image provided already">
          <ImageUpload
            onChange={this.onChangeHandler}
            validateImage={this.validateImage}
          >
            {this.IMAGE}
          </ImageUpload>
          {this.renderErrorMessage()}
        </Example>

      </Page>
    );
  }
}

ImageUploadExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default ImageUploadExample;
