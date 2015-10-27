
import React, {
  Component,
} from 'react';

export default class Example extends Component {

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
