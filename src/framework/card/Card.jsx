
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Label,
  SubLabel,
  Tooltip,
  Box,
} from '../framework';

const Card = (props) => {
  return (
    <Box classes='card' roundedCorners>
      <div style={{width: props.width}}>
        <div className='image' style={{backgroundImage:`url(${props.imageSrc})`}} />
        <div className='card__info'>
          <Label>{props.title}</Label>
          <SubLabel>{props.subtitle}</SubLabel>
          <SubLabel>{props.description}</SubLabel>
        </div>
        <div className='card__footer'>
          <div>
            <Tooltip message={props.tooltipText} width='200px;'>
              <Label className='green'>{props.hightlightText}</Label>
            </Tooltip>
          </div>
        </div>
      </div>
    </Box>
  );
};

Card.defaultProps = {
  height: '250px;',
  width: '210px;'
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  hightlightText: PropTypes.string,
  tooltipText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Card;
