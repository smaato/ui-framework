
import React from 'react';
import PropTypes from 'prop-types';

export {
  default as Column,
} from './Column.jsx';

const ColumnLayout = props => (
  <div>
    {props.children}
  </div>
);

ColumnLayout.propTypes = {
  children: PropTypes.any,
};

export default ColumnLayout;
