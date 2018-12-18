
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Pagination,
} from '../../../framework/framework';

export default class PaginationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 7,
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="Pagination">

          A zero-based index of a current pagination page is:&nbsp;
          { this.state.currentPage }

          <Pagination
            currentPage={this.state.currentPage}
            onChangePage={this.onChangePage}
            totalPages={15}
            visiblePages={5}
          />

        </Example>

      </Page>
    );
  }
}

PaginationExample.propTypes = {
  route: PropTypes.object.isRequired,
};
