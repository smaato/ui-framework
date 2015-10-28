
import React, {
  Component,
} from 'react';

export default class SubTitle extends Component {

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
