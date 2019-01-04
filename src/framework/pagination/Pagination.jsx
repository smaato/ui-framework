import React, {
  Component,
  PropTypes,
} from 'react';

const propTypes = {
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  visiblePages: PropTypes.number,
};

const defaultProps = {
  currentPage: 0,
  totalPages: 100,
  visiblePages: 7,
};

class Pagination extends Component {
  getPageList() {
    const { visiblePages, currentPage, totalPages } = this.props;
    const pagesToDisplay = Math.min(visiblePages, totalPages);
    const pageIndex = currentPage + Math.floor(pagesToDisplay / 2);
    const till = this.limitPageIndex(pageIndex) + 1;
    const from = this.limitPageIndex(till - pagesToDisplay);
    const result = [...Array(pagesToDisplay).keys()].map(x => x + from);

    return result;
  }

  limitPageIndex(pageIndex, totalPages = this.props.totalPages) {
    return Math.min(Math.max(0, pageIndex), totalPages - 1);
  }

  triggerClick(page) {
    const validatedPage = this.limitPageIndex(page);

    if (this.props.currentPage !== validatedPage) {
      this.props.onChangePage(validatedPage);
    }
  }

  renderLink(className, text, page) {
    return (<li
      key={text}
      className={className}
      onClick={() => this.triggerClick(page)}
    >
      <a>{text}</a>
    </li>);
  }

  render() {
    const firstPage = 0;
    const prevPage = this.props.currentPage - 1;
    const currPage = this.props.currentPage;
    const nextPage = this.props.currentPage + 1;
    const lastPage = this.props.totalPages - 1;

    const firstPageClassName = currPage === 0
    ? 'pagination__disabled'
    : 'pagination__enabled';

    const lastPageClassName = currPage === this.props.totalPages - 1
    ? 'pagination__disabled'
    : 'pagination__enabled';

    return (
      <nav className="pagination">
        <ul>
          {this.renderLink(firstPageClassName, '<<First', firstPage)}
          {this.renderLink(firstPageClassName, '<Prev', prevPage)}
          {this.getPageList().map(
            page => this.renderLink(
              currPage === page
              ? 'pagination__page pagination__disabled'
              : 'pagination__page pagination__enabled',
              page + 1,
              page
            )
          )}
          {this.renderLink(lastPageClassName, 'Next>', nextPage)}
          {this.renderLink(lastPageClassName, 'Last>>', lastPage)}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
