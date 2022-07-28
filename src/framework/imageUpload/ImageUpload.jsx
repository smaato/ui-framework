
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ImagePreview from './ImagePreview.jsx';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      image: null,
      isLoaded: false,
      hasErrors: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.hasLoaded = this.hasLoaded.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
  }

  componentDidMount() {
    if (this.props.children) {
      this.setState({
        isLoaded: true,
      });
    }
  }

  onRemoveImage() {
    // As default browser behaviour it doesnt allow you to reset what you selected
    // by resetting the value you are able to reload the same image selected
    this.refs.fileUploadInput.value = '';
    this.setState({
      file: null,
      hasErrors: false,
      image: null,
      isLoaded: false,
    });
    this.props.onChange();
  }

  hasLoaded(image) {
    const hasErrors =
      this.props.validateImage !== undefined && this.props.validateImage(image);
    this.setState({
      hasErrors,
      isLoaded: true,
    });
    if (!hasErrors) {
      this.props.onChange(this.state.file, this.state.image);
    }
  }

  handleChange(event) {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const imageBinaryUrl = fileReader.result;
      this.setState({
        image: imageBinaryUrl,
        isLoaded: false,
      });
    };
    this.setState({
      file: event.target.files[0],
    });
    fileReader.readAsDataURL(event.target.files[0]);
  }

  render() {
    const imageHidden = !this.state.isLoaded || this.state.hasErrors;
    const imagePreview = (
      <ImagePreview
        hasLoaded={this.hasLoaded}
        imageBinaryUrl={this.state.image}
      >
        {this.props.children}
      </ImagePreview>
    );

    const imageUploadClasses = classNames({
      'imageUpload--hidden': imageHidden,
    });

    const imagePreviewBlock = (
      <div className={imageUploadClasses}>
        {imagePreview}
        <div
          className="imageUpload__closeButton"
          onClick={this.onRemoveImage}
        />
      </div>
    );

    const inputClasses = classNames({
      'imageUpload--hidden': !imageHidden,
    });

    return (
      <div className="imageUpload">
        <input
          className={inputClasses}
          ref="fileUploadInput"
          onChange={this.handleChange}
          type="file"
        />
        {imagePreviewBlock}
      </div>
    );
  }
}

ImageUpload.propTypes = {
  children: PropTypes.string,
  onChange: PropTypes.func,
  validateImage: PropTypes.func,
};

export default ImageUpload;
