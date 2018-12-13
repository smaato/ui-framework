
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

  constructor() {
    super();

    this.state = {
      page: 3,
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="Pagination">

          A zero-based index of a current pagination page is:&nbsp;
          { this.state.page }

          <Pagination
            page={this.state.page}
            pages={15}
            maxVisiblePages={3}
            onChangePage={this.onChangePage}
          />

        </Example>

      </Page>
    );
  }

}

PaginationExample.propTypes = {
  route: PropTypes.object.isRequired,
};
