
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  Menu,
  MenuItem,
} from '../../../framework/framework';

export default class MenuExample extends Component {

  constructor(props) {
    super(props);

    this.categories = [{
      name: 'Language',
    }, {
      name: 'Country',
    }, {
      name: 'Favorite color',
    }, {
      name: 'Hat size',
    }];

    this.state = {
      selectedCategory: this.categories[0],
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
  }

  onSelectCategory(category) {
    this.setState({
      selectedCategory: category,
    });
  }

  render() {
    const categoryItems = this.categories.map((category, index) => {
      return (
        <MenuItem
          key={index}
          category={category}
          isSelected={this.state.selectedCategory === category}
          onClick={this.onSelectCategory}
        >
          {category.name}
        </MenuItem>
      );
    });

    return (
      <Page title={this.props.route.name}>
        <Example>
          <Menu
            title="Categories"
          >
            {categoryItems}
          </Menu>
        </Example>
      </Page>
    );
  }

}
