
import React, {
  PropTypes,
} from 'react';

import {
  Label,
  SubLabel,
  Tooltip,
  Box,
} from '../framework';

const Card = (props) => {
  const wrapperStyle = {
    height: props.height,
    width: props.width,
  };

  return (
    <Box classes="card" roundedCorners >
      <div
        className="card__wrapper"
        onClick={props.onClick}
        style={wrapperStyle}
      >
        <div
          className="card__image"
          style={{ backgroundImage: `url(${props.imageSrc})` }}
        />

        <div className="card__info">
          <Label>{props.title}</Label>
          <SubLabel className="card__info__subLabel card__text--mediumgrey">
            {props.subtitle}
          </SubLabel>
          <SubLabel className="card__info__subLabel card__text--lightgrey">
            {props.description}
          </SubLabel>
        </div>

        <div className="card__footer">
          <div className="card__footer--left">
            <Tooltip message={props.tooltipText} width="150px">
              <Label className="card__footer__label card__text--green">
                {props.highlightText}
              </Label>
            </Tooltip>
          </div>
        </div>
      </div>
    </Box>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  height: PropTypes.string,
  highlightText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  height: '250px',
  width: '210px',
};

export default Card;
