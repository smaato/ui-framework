
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
      <div style={wrapperStyle} className="card-wrapper">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.imageSrc})` }}
        />
        <div className="card-info">
          <Label>{props.title}</Label>
          <SubLabel className="card-sub-label card-text--mediumgrey">
            {props.subtitle}
          </SubLabel>
          <SubLabel className="card-sub-label card-text--lightgrey">
            {props.description}
          </SubLabel>
        </div>
        <div className="card-footer">
          <div className="card-footer-left">
            <Tooltip message={props.tooltipText} width="150px">
              <Label className="card-label card-text--green">
                {props.hightlightText}
              </Label>
            </Tooltip>
          </div>
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
