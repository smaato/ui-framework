
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
    height: props.height ? props.height : '250px',
    width: props.width ? props.width : '210px',
  };

  return (
    <Box classes="card" roundedCorners>
      <div style={wrapperStyle} className="card__wrapper">
        <div
          className="image"
          style={{ backgroundImage: `url(${props.imageSrc})` }}
        />
        <div className="card__info">
          <Label>{props.title}</Label>
          <SubLabel>{props.subtitle}</SubLabel>
          <SubLabel>{props.description}</SubLabel>
        </div>
        <div className="card__footer">
          <Tooltip message={props.tooltipText} width="80px">
            <Label className="green">{props.hightlightText}</Label>
          </Tooltip>
        </div>
      </div>
    </Box>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  hightlightText: PropTypes.string,
  tooltipText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Card;
