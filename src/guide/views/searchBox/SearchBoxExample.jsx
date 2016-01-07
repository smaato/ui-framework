
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  SearchBox,
} from '../../../framework/framework';

export default class SearchBoxExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  onSearch(term) {
    this.setState({
      searchTerm: term,
    });
  }

  search(items, term) {
    if (!term) {
      return items;
    }
    const normalizedTerm = term.trim().toLowerCase();
    return items.filter(item => {
      // It will return true when 1st match is found, otherwise false
      const normalizedItemValue = item.trim().toLowerCase();
      return normalizedItemValue.indexOf(normalizedTerm) !== -1; // eslint-disable-line consistent-return
    });
  }

  render() {
    const items = this.search([
      'algebra',
      'data',
      'elaborate',
      'inert',
      'magenta',
      'manual',
      'sphere',
      'vitality',
    ], this.state.searchTerm);

    const results = items.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      );
    });

    return (
      <Page title={this.props.route.name}>

        <Example>

          <SearchBox
            onSearch={this.onSearch.bind(this)}
          />

          <ol>
            {results}
          </ol>

        </Example>

        <Example title="Search as you type">

          <SearchBox
            onSearch={this.onSearch.bind(this)}
            isImmediate
          />

        </Example>

        <Example title="Full width">

          <SearchBox
            onSearch={this.onSearch.bind(this)}
            isFullWidth
          />

        </Example>

      </Page>
    );
  }

}
