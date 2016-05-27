
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as GridHeader,
} from './header/GridHeader.jsx';

export {
  default as GridFooter,
} from './footer/GridFooter.jsx';

export {
  default as GridBody,
} from './body/GridBody.jsx';

export {
  default as GridRow,
} from './body/GridRow.jsx';

export {
  default as GridFakeRow,
} from './body/GridFakeRow.jsx';

export {
  default as GridHeaderSortableCell,
} from './header/GridHeaderSortableCell.jsx';

export {
  default as GridBodyEditableCell,
} from './body/GridBodyEditableCell.jsx';

export {
  default as GridLoadingRow,
} from './loading/GridLoadingRow.jsx';

export {
  default as GridEmptyRow,
} from './empty/GridEmptyRow.jsx';

export {
  default as GridIcon,
} from './icon/GridIcon.jsx';

export {
  default as GridControls,
} from './controls/GridControls.jsx';

export {
  default as StickyGrid,
} from './stickyGrid/StickyGrid.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // Style classes
    const containerClass = classNames(
      'grid__container',
      this.props.classContainer
    );
    const tableClass = classNames('grid__table', this.props.classTable);

    return (
      <div
        data-id={this.props.dataId}
        className={containerClass}
      >
        <table className={tableClass}>

          {this.props.header}

          {this.props.children}

          {this.props.footer}

        </table>
      </div>
    );
  }

}

Grid.propTypes = {
  dataId: PropTypes.string,
  header: PropTypes.element,
  children: PropTypes.any,
  footer: PropTypes.element,
  // Classes
  classContainer: PropTypes.string,
  classTable: PropTypes.string,
};
