
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import {
  Box,
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
  }

  render() {
    return (
      <Box data-testid="Card" classes="card" roundedCorners>
        <div
          className="card__wrapper"
          onClick={this.props.onClick}
          style={this.wrapperStyle}
        >
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
                    {this.props.highlightText}
                  </Label>
                </Tooltip>
              </div>
            </div>
            <div className="card__footer--right">
              {this.props.footerRight}
            </div>
          </div>

          {this.props.ribbon || null}

        </div>
      </Box>
    );
  }
}

Card.propTypes = {
  description: PropTypes.string,
  footerRight: PropTypes.any,
  height: PropTypes.string,
  highlightText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  ribbon: PropTypes.element,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  height: '250px',
  width: '210px',
};
