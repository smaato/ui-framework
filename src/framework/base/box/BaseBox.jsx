
import React, {
  PropTypes,
} from 'react';

const BaseBox = props => (
  <div
    className={props.classes}
    data-id={props.dataId}
  >
    {props.children}
  </div>
);

BaseBox.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string.isRequired,
  dataId: PropTypes.string,
};

export default BaseBox;
