
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  PickedList,
  PickedListItem,
} from '../../../framework/framework';

export default class PickedListExample extends Component {

  constructor(props) {
    super(props);

    this.categories = [{
      name: 'Countries',
      items: [{
        name: 'Australia',
        parent: 'Australia',
        type: PickedListItem.TYPE.ALLOWED,
      }, {
        name: 'North Korea',
        parent: 'Asia',
        type: PickedListItem.TYPE.NOT_ALLOWED,
      }, {
        name: 'Pakistan',
        parent: 'Asia',
        type: PickedListItem.TYPE.ALLOWED,
      }, {
        name: 'Venezuela',
        parent: 'South America',
        type: PickedListItem.TYPE.ALLOWED,
      }],
    }, {
      name: 'Languages',
      items: [{
        name: 'Chinese',
        type: PickedListItem.TYPE.ALLOWED,
      }, {
        name: 'Esperanto (constructed language)',
        parent: 'Spoken everywhere and nowhere',
        type: PickedListItem.TYPE.ALLOWED,
      }],
    }];

    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onRemoveItem(data) {
    window.alert(`Remove ${data.item.name} from ${data.category.name}`); // eslint-disable-line no-alert
  }

  render() {
    const lists = this.categories.map((category, categoryIndex) => {
      const items = category.items.map((item, itemIndex) => {
        const data = {
          item,
          category,
        };

        return (
          <PickedListItem
            data={data}
            key={itemIndex}
            meta={item.parent}
            onRemove={this.onRemoveItem}
            type={item.type}
          >
            {item.name}
          </PickedListItem>
        );
      });
      items.push(
        <PickedListItem
          key={items.length}
          type={PickedListItem.TYPE.NOT_ALLOWED}
        >
          All Other {this.categories[categoryIndex].name}
        </PickedListItem>
      );

      return (
        <PickedList
          key={categoryIndex}
          title={category.name}
        >
          {items}
        </PickedList>
      );
    });

    return (
      <Page title={this.props.route.name}>
        <Example>
          <div style={{ maxWidth: 320 }}>
            {lists}
          </div>
        </Example>
      </Page>
    );
  }

}

PickedListExample.propTypes = {
  route: PropTypes.object.isRequired,
};
