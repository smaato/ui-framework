
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Label,
  SubLabel,
  Tooltip
} from '../framework';

const Card = (props) => {
  const style = {
    width: props.width || '212px;',
    height: props.height || '247px;'
  }

  return <div className='card'>
    <figure>
      <img style={{width:`${props.width}`}} src={props.imageSrc} />
    </figure>
    <div className='card__info'>
      <Label>{props.title}</Label>
      <SubLabel>{props.subtitle}</SubLabel>
    </div>
    <div className='card__footer'>
      <div>
        <Tooltip message={props.tooltipText} width='200px;'>
          <Label className='green'>{props.hightlightText}</Label>
        </Tooltip>
      </div>
    </div>
  </div>;
};

Card.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hightlightText: PropTypes.string,
  tooltipText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Card;
