
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Box,
  StatusDropdown,
  Label,
  SubLabel,
  Tooltip,
} from '../framework';

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.wrapperStyle = {
      height: props.height,
      width: props.width,
    };
    this.dropdownItems = [
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
    return (
      <Box classes="card" roundedCorners>
        <div className="card__wrapper" style={this.wrapperStyle}>
          <div
            className="card__image"
            style={{ backgroundImage: `url(${this.props.imageSrc})` }}
          />

          <div className="card__info">
            <Label>{this.props.title}</Label>
            <SubLabel className="card__info__subLabel card__text--mediumgrey">
              {this.props.subtitle}
            </SubLabel>
            <SubLabel className="card__info__subLabel card__text--lightgrey">
              {this.props.description}
            </SubLabel>
          </div>

          <div className="card__footer">
            <div className="card__footer--left">
              <div className="card__footer--left__tooltip">
                <Tooltip message={this.props.tooltipText} width="150px">
                  <Label className="card__footer__label card__text--green">
                    {this.props.hightlightText}
                  </Label>
                </Tooltip>
              </div>
            </div>
            <div className="card__footer--right">
              <div className="card__footer--right__status">
                <StatusDropdown
                  onSelect={this.onSelectOption}
                  options={this.dropdownItems}
                  selectedOption={this.state.selectedOption}
                />
              </div>
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

Card.propTypes = {
  description: PropTypes.string,
  height: PropTypes.string,
  hightlightText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  height: '250px',
  width: '210px',
};

