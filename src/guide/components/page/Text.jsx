
import React, {
  Component,
  PropTypes,
} from 'react';

class Text extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="examplePageText">
        {this.props.children}
      </div>
    );
  }

}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Text;
