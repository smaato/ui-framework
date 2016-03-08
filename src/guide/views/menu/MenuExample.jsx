
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
    const itemItems = this.items.map((item, index) => {
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
        {itemItems}
      </Menu>
    );
  }

  renderMenuWithActions() {
    const itemItems = this.items.map((item, index) => {
      return (
        <MenuItem
          key={index}
          item={item}
          isSelected={this.state.selectedItem === item}
          label={item.name}
          actions={[
            <Link isList key={0}>Allow</Link>,
            <Link isList key={1}>Block</Link>,
          ]}
        />
      );
    });

    return (
      <Menu>
        {itemItems}
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
