import React, {
  Component,
  PropTypes,
} from 'react';

const propTypes = {
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
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

    const till = this.validatePage(
      currentPage + Math.floor(pagesToDisplay / 2)
    ) + 1;

    const from = this.validatePage(
      till - pagesToDisplay
    );

    const result = [...Array(pagesToDisplay).keys()].map(x => x + from);

    return result;
  }

  validatePage(currentPage, totalPages = this.props.totalPages) {
    return Math.min(Math.max(0, currentPage), totalPages - 1);
  }

  triggerClick(page) {
    const validatedPage = this.validatePage(page);

    if (this.props.currentPage !== validatedPage) {
      this.props.onChangePage(validatedPage);
    }
  }

  renderLink(className, text, onClick) {
    return (<li key={text} className={className}>
      <a onClick={onClick}>{text}</a>
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
          {this.renderLink(
            firstPageClassName, '<', () => this.triggerClick(firstPage)
          )}

          {this.renderLink(
            firstPageClassName, 'Prev', () => this.triggerClick(prevPage)
          )}

          {this.getPageList().map(
            page => this.renderLink(
              currPage === page
              ? 'pagination__page pagination__disabled'
              : 'pagination__page pagination__enabled',
              page + 1,
              () => this.triggerClick(page)
            )
          )}

          {this.renderLink(
            lastPageClassName, 'Next', () => this.triggerClick(nextPage)
          )}

          {this.renderLink(
            lastPageClassName, '>', () => this.triggerClick(lastPage)
          )}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
