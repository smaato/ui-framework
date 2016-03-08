
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Link,
  Menu,
  MenuItem,
} from '../../../framework/framework';

export default class MenuExample extends Component {

  constructor(props) {
    super(props);

    this.items = [{
      name: 'Language',
    }, {
      name: 'Country',
    }, {
      name: 'Favorite color',
    }, {
      name: 'Hat size',
    }];

    this.state = {
      selectedItem: this.items[0],
    };

    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectItem(item) {
    this.setState({
      selectedItem: item,
    });
  }

  renderMenu() {
    const menuItems = this.items.map((item, index) => {
      return (
        <MenuItem
          key={index}
          item={item}
          isSelected={this.state.selectedItem === item}
          onClick={this.onSelectItem}
          label={item.name}
        />
      );
    });

    return (
      <Menu>
        {menuItems}
      </Menu>
    );
  }

  renderMenuWithActions() {
    const menuItems = this.items.map((item, index) => {
      return (
        <MenuItem
          key={index}
          label={item.name}
          actions={[
            <Link key={0}>Allow</Link>,
            <Link key={1}>Block</Link>,
          ]}
        />
      );
    });

    return (
      <Menu>
        {menuItems}
      </Menu>
    );
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          {this.renderMenu()}
        </Example>

        <Example title="With actions">
          {this.renderMenuWithActions()}
        </Example>
      </Page>
    );
  }

}
