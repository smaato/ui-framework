
import React, {
  Component,
} from 'react';

export default class Text extends Component {

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
