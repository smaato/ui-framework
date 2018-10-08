
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import PreviewImage from './PreviewImage.jsx';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      image: null,
      hasErrors: false,
      isloaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.hasLoaded = this.hasLoaded.bind(this);
    this.onCloseImage = this.onCloseImage.bind(this);
  }

  onCloseImage() {
    // As default browser behaviour it doesnt allow you to reset what you selected
    // by resetting the value you are able to reload the same image selected
    document.getElementById('fileUploadInput').value = '';
    this.setState({
      file: null,
      hasErrors: false,
      image: null,
      isloaded: false,
    });
    this.props.onChange();
  }

  hasLoaded(image) {
    const hasErrors =
      this.props.validateImage !== undefined && this.props.validateImage(image);
    this.setState({
      hasErrors,
      isloaded: true,
    });
    if (!hasErrors) {
      this.props.onChange(this.state.file, this.state.image);
    }
  }

  handleChange(event) {
    const fr = new FileReader();

    fr.onload = () => {
      const imageBinaryUrl = fr.result;
      this.setState({
        image: imageBinaryUrl,
        isloaded: false,
      });
    };
    this.setState({
      file: event.target.files[0],
    });
    fr.readAsDataURL(event.target.files[0]);
  }

  render() {
    const imageReady = !this.state.isloaded || this.state.hasErrors;
    const previewImage = (<PreviewImage
      hasLoaded={this.hasLoaded}
      imageBinaryUrl={this.state.image}
    />);

    const uploadImageClasses = classNames('uploadImage', {
      hidden: imageReady,
    });

    const uploadImage = (<div className={uploadImageClasses}>
      {previewImage}
      <div className="uploadImage__closeButton" onClick={this.onCloseImage} />
    </div>);

    const inputClasses = classNames('uploadImage', {
      hidden: !imageReady,
    });

    return (
      <div>
        <input
          className={inputClasses}
          id="fileUploadInput"
          onChange={this.handleChange}
          type="file"
        />
        {uploadImage}
      </div>
    );
  }
}

UploadImage.propTypes = {
  onChange: PropTypes.func,
  validateImage: PropTypes.func,
};

export default UploadImage;
