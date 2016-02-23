
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  OrganizationSwitcher,
  OrganizationSwitcherItem,
} from '../../../framework/framework';

export default class OrganizationSwitcherExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.onSearch = this.onSearch.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    console.log('Close'); // eslint-disable-line no-console
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
      const normalizeNameValue = item.name.trim().toLowerCase();
      const nameIndex = normalizeNameValue.indexOf(normalizedTerm);
      if (nameIndex !== -1) {
        return true;
      }
      if (item.id.toString() === normalizedTerm) {
        return true;
      }
      return false;
    });
  }

  selectOrganization(organization) {
    console.log(organization); // eslint-disable-line no-console
  }

  render() {
    const orgs = this.search([{
      id: 0,
      name: 'Algebra',
    }, {
      id: 1,
      name: 'Data',
    }, {
      id: 2434895743333,
      name: 'Elaborate very long example name',
    }, {
      id: 3,
      name: 'Inert',
    }, {
      id: 4,
      name: 'Magenta',
    }, {
      id: 5,
      name: 'Manual',
    }, {
      id: 6,
      name: 'Sphere',
    }, {
      id: 7,
      name: 'Vitality',
    }], this.state.searchTerm);

    let organizationList;

    if (orgs.length) {
      organizationList = orgs.map((item, index) => {
        return (
          <OrganizationSwitcherItem
            key={index}
            name={item.name}
            id={item.id.toString()}
            onSelect={this.selectOrganization.bind(this, item)} // eslint-disable-line react/jsx-no-bind
          />
        );
      });
    } else {
      organizationList = (
        <OrganizationSwitcherItem
          message="No results."
        />
      );
    }

    return (
      <Page title={this.props.route.name}>

        <Example>

          <OrganizationSwitcher
            title="Switch buyer"
            searchPrompt="Search by Buyer Name or ID"
            onSearch={this.onSearch}
            onClose={this.onClose}
          >
            {organizationList}
          </OrganizationSwitcher>

        </Example>

      </Page>
    );
  }

}
