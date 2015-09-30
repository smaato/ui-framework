
import React, {
  Component,
  PropTypes
} from 'react';

export default class GridCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let baseCellClass = [this.props.rootClass, this.props.section, 'cell'].join('__');

    return (
      <div className={baseCellClass}>
        <span className={baseCellClass + 'Liner'}>
          {this.props.content}
        </span>
      </div>
    );
  }

}
