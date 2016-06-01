
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
  RecycledList,
} from '../../../framework/framework';

import {
  ScrollPosition,
} from '../../../framework/services';

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

    this.scrollPosition = new ScrollPosition();

    this.onScroll = this.onScroll.bind(this);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  componentDidMount() {
    this.scrollPosition.init(this.refs.scrollingMenu);
    this.scrollPosition.addListener(this.onScroll);
  }

  componentWillUnmount() {
    this.scrollPosition.removeListener(this.onScroll);
    this.scrollPosition.teardown();
  }

  onScroll() {
    // You can compare the distance from the bottom to a threshold to
    // implement lazy-loading.
    if (this.scrollPosition.fromBottom === 0) {
      window.alert('You\'ve scrolled to the bottom of the menu.'); // eslint-disable-line no-alert
    }
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

  renderMenuWithRecycledList() {
    const count = 1000;
    const menuItems = [];
    for (let i = 0; i < count; i++) {
      menuItems.push(
        <MenuItem
          key={i}
          label={i}
        />
      );
    }
    return (
      <div
        ref="scrollingMenu"
        style={{
          height: 300,
          overflow: 'scroll',
        }}
      >
        <RecycledList
          rootElement={<Menu />}
          items={menuItems}
          overflowDistance={300}
          recycledItemsCount={40}
          itemHeightProvider={() => MenuItem.HEIGHT} // eslint-disable-line react/jsx-no-bind
          scrollPosition={this.scrollPosition}
        />
      </div>
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

        <Example title="With RecycledList">
          {this.renderMenuWithRecycledList()}
        </Example>
      </Page>
    );
  }

}

MenuExample.propTypes = {
  route: PropTypes.object.isRequired,
};
