
import React, {
  Component,
  PropTypes,
} from 'react';

class SubTitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="examplePageSubTitle">
        {this.props.children}
      </div>
    );
  }

}

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
