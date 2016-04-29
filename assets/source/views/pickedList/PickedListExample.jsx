
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
        type: PickedListItem.TYPE.ALLOWED,
      }, {
        name: 'North Korea',
        type: PickedListItem.TYPE.NOT_ALLOWED,
      }, {
        name: 'Pakistan',
        type: PickedListItem.TYPE.ALLOWED,
      }, {
        name: 'Venezuela',
        type: PickedListItem.TYPE.ALLOWED,
      }],
    }, {
      name: 'Languages',
      items: [{
        name: 'Chinese',
        type: PickedListItem.TYPE.ALLOWED,
      }, {
        name: 'Esperanto',
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
            key={itemIndex}
            type={item.type}
            data={data}
            onRemove={this.onRemoveItem}
          >
            {item.name}
          </PickedListItem>
        );
      });

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
