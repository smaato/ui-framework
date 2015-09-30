
import React, {
  Component,
  PropTypes
} from 'react';
import GridSection from './GridSection.jsx';

export default class GridBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GridSection
        section="body"
        rootClass={this.props.rootClass}
        appendClass={this.props.appendClass}
        rows={this.props.rows}
      />
    );
  }

}

GridBody.propTypes = {
  rows: PropTypes.array.isRequired,
  rootClass: PropTypes.string.isRequired,
  appendClass: PropTypes.string,
};
