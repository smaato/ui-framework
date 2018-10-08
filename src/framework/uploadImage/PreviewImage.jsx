
import PropTypes from 'prop-types';
import React from 'react';

class PreviewImage extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.imageBinaryUrl === prevProps.imageBinaryUrl) {
      return null;
    }
    const image = new Image();

    image.onload = () => {
      this.props.hasLoaded(this.props.imageBinaryUrl);
    };

    image.src = this.props.imageBinaryUrl;
  }

  render() {
    return (<img alt="Preview" src={this.props.imageBinaryUrl} />);
  }
}

PreviewImage.propTypes = {
  hasLoaded: PropTypes.func,
  imageBinaryUrl: PropTypes.any,
};

export default PreviewImage;
