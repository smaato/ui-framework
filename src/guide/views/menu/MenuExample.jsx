
import React, {
  Component,
  PropTypes,
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
      serial: '23454123289017890103873492468923189302134728493',
    }, {
      name: 'Country',
      serial: '69923',
    }, {
      name: 'Favorite color',
      serial: '5676',
    }, {
      name: 'Hat size',
      serial: '4021546',
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
    const menuItems = this.items.map((item, index) => (
      <MenuItem
        key={index}
        data={item}
        isSelected={this.state.selectedItem === item}
        onClick={this.onSelectItem}
        label={item.name}
      />
    ));

    return (
      <Menu>
        {menuItems}
      </Menu>
    );
  }

  renderMenuWithActions() {
    const menuItems = this.items.map((item, index) => (
      <MenuItem
        key={index}
        label={item.name}
        meta={item.serial}
        actions={[
          <Link key={0}>Allow</Link>,
          <Link key={1}>Block</Link>,
        ]}
      />
    ));

    return (
      <Menu>
        {menuItems}
      </Menu>
    );
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example title="Selectable">
          {this.renderMenu()}
        </Example>

        <Example title="With meta and actions">
          {this.renderMenuWithActions()}
        </Example>
      </Page>
    );
  }

}

MenuExample.propTypes = {
  route: PropTypes.object.isRequired,
};
