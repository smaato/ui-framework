
import React, {
  Component,
} from 'react';

export default class Title extends Component {

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
