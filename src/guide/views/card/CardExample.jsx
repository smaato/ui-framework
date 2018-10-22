
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Card,
  CardHolder,
  Ribbon,
  StatusDropdown,
} from '../../../framework/framework';

export default class CardExample extends Component {

  constructor(props) {
    super(props);

    this.array = [0, 1, 2, 3, 4, 5];
    this.longDescription = `Do not go gentle into that good night,
    Old age should burn and
    rave at close of day;
    Rage, rage against the dying of the light.`;
    this.subTitle = 'This is a subtitle and this is also a part of the same';

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
            {this.array.map(i =>
              <Card
                description={i % 2 === 0 ? this.longDescription : null}
                footerRight={dropdownOnEven(i)}
                highlightText={`Highlight ${i + 1}`}
                imageSrc="http://pipsum.com/210x150.jpg"
                key={i}
                ribbon={(
                  i % 2 ?
                    <Ribbon imageSrc="https://raw.githubusercontent.com/smaato/ui-framework/103eddd2dd967ab39de6db939c26aa5afe0673c4/src/guide/views/card/blueRibbon.png" /> : null
                )}
                subtitle={i % 3 === 0 ? this.subTitle : null}
                title={`Card ${i + 1}`}
                tooltipText={`Tooltip ${i + 1}`}
              />
            )}
          </CardHolder>
        </Example>
      </Page>
    );
  }
}

CardExample.propTypes = {
  route: PropTypes.object.isRequired,
};
