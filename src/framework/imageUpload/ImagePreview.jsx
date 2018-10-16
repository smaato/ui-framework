
import React, {
  Component,
  PropTypes,
} from 'react';

class ImagePreview extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.imageBinaryUrl === prevProps.imageBinaryUrl) {
      return null;
    }
    const image = new Image();

    image.onload = () => {
      this.props.hasLoaded(image);
    };

    image.src = this.props.imageBinaryUrl;
  }

  render() {
    const image = this.props.imageBinaryUrl ?
      this.props.imageBinaryUrl :
      this.props.children;
    return (<img alt="Preview" src={image} />);
  }
}

ImagePreview.propTypes = {
  children: PropTypes.string,
  hasLoaded: PropTypes.func,
  imageBinaryUrl: PropTypes.any,
};

export default ImagePreview;
