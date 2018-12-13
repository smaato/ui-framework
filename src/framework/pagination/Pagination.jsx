import React, {
  Component,
  PropTypes,
} from 'react';

const propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  maxVisiblePages: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
};

const defaultProps = {
  page: 0,
  pages: 100,
  maxVisiblePages: 7,
};

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = { options: {} };
  }

  componentWillMount() {
    // set page if items array isn't empty
    const {
      pages,
      maxVisiblePages,
    } = this.props;

    const page = this.validatePage(this.props.page, pages);

    this.setState({
      options: {
        page,
        pages,
        maxVisiblePages,
      },
    });
  }

  setPage(pageNext) {
    const page = this.validatePage(pageNext);
    if (this.state.options.page !== page) {
      this.setState({ options: { ...this.state.options, page } });
      this.props.onChangePage(page);
    }
  }

  getPageList() {
    const { maxVisiblePages, page, pages } = this.state.options;

    const pagesToDisplay = Math.min(maxVisiblePages, pages);

    const till = this.validatePage(
      page + Math.floor(pagesToDisplay / 2)
    ) + 1;

    const from = this.validatePage(
      till - pagesToDisplay
    );

    const result = [...Array(pagesToDisplay).keys()].map(x => x + from);

    return result;
  }

  validatePage(page, pages = this.state.options.pages) {
    return Math.min(Math.max(0, page), pages - 1);
  }

  render() {
    const options = this.state.options;

    return (
      <nav className="pagination">
        <ul>
          <li
            className={
              options.page === 0
                ? 'pagination__disabled'
                : 'pagination__enabled'
            }
          >
            <a onClick={() => this.setPage(0)}>&lt;</a>
          </li>

          <li
            className={
              options.page === 0
                ? 'pagination__disabled'
                : 'pagination__enabled'
            }
          >
            <a onClick={() => this.setPage(options.page - 1)}>
              Prev
            </a>
          </li>

          {this.getPageList().map(page =>
            <li
              key={page}
              className={
                options.page === page
                  ? 'pagination__page pagination__disabled'
                  : 'pagination__page pagination__enabled'
              }
            >
              <a onClick={() => this.setPage(page)}>{page + 1}</a>
            </li>
          )}
          <li
            className={
              options.page === options.pages - 1
                ? 'pagination__disabled'
                : 'pagination__enabled'
            }
          >
            <a onClick={() => this.setPage(options.page + 1)}>Next</a>
          </li>
          <li
            className={
              options.page === options.pages - 1
                ? 'pagination__disabled'
                : 'pagination__enabled'
            }
          >
            <a onClick={() => this.setPage(options.pages - 1)}>&gt;</a>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
