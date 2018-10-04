
import PropTypes from 'prop-types';
import React from 'react';
import {
  FieldMessage,
} from './../framework.js';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      validation: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onCloseImage = this.onCloseImage.bind(this);
  }

  onCloseImage() {
    this.setState({
      file: null,
      isloaded: false,
    });
  }

  handleChange(event) {
    const fr = new FileReader();

    fr.onload = () => {
      const imageBinaryUrl = fr.result;
      const image = new Image();

      image.onload = () => {
        let validation = '';
        if (
          image.width !== this.props.requiredWidth ||
          image.height !== this.props.requiredHeight
        ) {
          validation =
            `The required size is ${this.props.requiredWidth}x` +
            `${this.props.requiredHeight}`;
        }

        this.setState({
          validation,
          isloaded: true,
        });
        if (!this.hasErrors()) {
          this.props.onChange(imageBinaryUrl);
        }
      };

      image.src = imageBinaryUrl;

      this.setState({
        file: imageBinaryUrl,
        isloaded: false,
      });
    };

    fr.readAsDataURL(event.target.files[0]);
  }

  hasErrors() {
    return !!this.state.validation && this.state.validation.length > 0;
  }

  render() {
    const uploadImage = (!this.state.isloaded || this.hasErrors()) ?
      <input type="file" onChange={this.handleChange} /> :
      (<div className="uploadImage">
        <img alt="test" data-id={this.props.dataId} src={this.state.file} />
        <div className="uploadImage__closeButton" onClick={this.onCloseImage} />
      </div>);
    let validation;

    if (this.hasErrors()) {
      validation = <FieldMessage message={this.state.validation} />;
    }

    return (
      <div>
        {uploadImage}
        {validation}
      </div>
    );
  }
}

UploadImage.defaultProps = {
  requiredHeight: 150,
  requiredWidth: 210,
};

UploadImage.propTypes = {
  dataId: PropTypes.string,
  requiredHeight: PropTypes.number,
  requiredWidth: PropTypes.number,
  onChange: PropTypes.func,
};

export default UploadImage;
