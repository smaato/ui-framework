
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Card,
  CardHolder,
  StatusDropdown,
} from '../../../framework/framework';

export default class CardExample extends Component {

  constructor(props) {
    super(props);

    this.longDescription = `Do not go gentle into that good night,
    Old age should burn and
    rave at close of day;
    Rage, rage against the dying of the light.`;

    this.arr = [1, 2, 3, 4, 5, 6];

    this.statusOptions = [
      StatusDropdown.OPTIONS.PUBLISHED,
      StatusDropdown.OPTIONS.UNPUBLISHED,
    ];

    this.state = {
      selectedOption: undefined,
    };

    this.onSelectOption = this.onSelectOption.bind(this);
  }

  onSelectOption(option) {
    this.setState({
      selectedOption: option,
    });
  }

  render() {
    const dropdownOnEven = (position) => {
      if (position % 2 === 0) {
        return (
          <div className="card__footer--right__status">
            <StatusDropdown
              onSelect={this.onSelectOption}
              options={this.statusOptions}
              selectedOption={this.state.selectedOption}
            />
          </div>
        );
      }
    };

    return (
      <Page title={this.props.route.name}>
        <Example>
          <CardHolder amountPerRow={4}>
            {this.arr.map(i => <Card
              description={this.longDescription}
              footerRight={dropdownOnEven(i)}
              highlightText={`Highlight ${i}`}
              imageSrc="http://pipsum.com/210x150.jpg"
              key={i}
              subtitle="This is a subtitle and this is also a part of the same"
              title={`Card ${i}`}
              tooltipText={`Tooltip ${i}`}
            />)}
          </CardHolder>
        </Example>
      </Page>
    );
  }
}

CardExample.propTypes = {
  route: PropTypes.object.isRequired,
};
