
import React, {
  Component,
  PropTypes,
} from 'react';

class Title extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="examplePageTitle">
        {this.props.children}
      </div>
    );
  }

}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
