
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
  Panel,
  PanelLayout,
  PanelProgress,
  PickedList,
  PickedListItem,
  SearchBox,
  SummaryControl,
} from '../../../framework/framework';

export default class PanelExample extends Component {

  constructor(props) {
    super(props);

    this.items = [{
      name: 'A',
    }, {
      name: 'B',
    }, {
      name: 'C',
    }, {
      name: 'D',
    }, {
      name: 'E',
    }, {
      name: 'F',
    }, {
      name: 'G',
    }, {
      name: 'H',
    }, {
      name: 'I',
    }, {
      name: 'J',
    }, {
      name: 'K',
    }, {
      name: 'L',
    }];
  }

  onSearch() {
    // This is a no-op. It's just here to satisfy a required prop.
  }

  onRemoveItem() {
    // This is a no-op. It's just here to satisfy a required prop.
  }

  renderMenu(limit = this.items.length) {
    const items = [];

    for (let i = 0; i < limit; i++) {
      const item = this.items[i];
      items.push(
        <MenuItem
          key={i}
          label={item.name}
        />
      );
    }

    return (
      <Menu>
        {items}
      </Menu>
    );
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <div style={{ height: 300 }}>
            <Panel
              title="Letters"
            >
              {this.renderMenu(3)}
            </Panel>
          </div>
        </Example>

        <Example title="Scrollable, with PanelProgress">
          <div style={{ height: 300 }}>
            <Panel
              title="Letters"
            >
              {this.renderMenu()}
              <PanelProgress />
            </Panel>
          </div>
        </Example>

        <Example title="With search box">
          <Panel
            title="Searchable"
            actions={
              <SearchBox onSearch={ this.onSearch } />
            }
          >
            Content
          </Panel>
        </Example>

        <Example title="With action">
          <Panel
            title="Clearable"
            actions={<Link>Clear all</Link>}
          >
            Content
          </Panel>
        </Example>

        <Example title="Centered">
          <div style={{ height: 300 }}>
            <Panel
              title="Centered"
              isCentered
            >
              <SummaryControl
                type={SummaryControl.TYPE.ALLOWED}
                isStatic
              >
                Everything is great
              </SummaryControl>
            </Panel>
          </div>
        </Example>

        <Example title="With picked list">
          <Panel
            title="Picked list"
            isPadded
          >
            <PickedList title="Test">
              <PickedListItem
                type={PickedListItem.TYPE.ALLOWED}
                onRemove={this.onRemoveItem}
              >
                A
              </PickedListItem>
              <PickedListItem
                type={PickedListItem.TYPE.ALLOWED}
                onRemove={this.onRemoveItem}
              >
                B
              </PickedListItem>
              <PickedListItem
                type={PickedListItem.TYPE.ALLOWED}
                onRemove={this.onRemoveItem}
              >
                C
              </PickedListItem>
            </PickedList>
          </Panel>
        </Example>

        <Example title="PanelLayout">
          <div style={{ height: 300 }}>
            <PanelLayout>
              <Panel title="Left panel" />
              <Panel title="Right panel" />
            </PanelLayout>
          </div>
        </Example>
      </Page>
    );
  }

}

PanelExample.propTypes = {
  route: PropTypes.object.isRequired,
};
