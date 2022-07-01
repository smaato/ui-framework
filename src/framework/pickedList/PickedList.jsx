
import PropTypes from 'prop-types';
import React from 'react';

export {
  default as PickedListItem,
} from './PickedListItem.jsx';

const PickedList = props => (
  <div data-testid="PickedList" className="pickedListContainer">
    <div className="pickedListTitle">
      {props.title}
    </div>
    <div
      data-id={props.dataId}
      className="pickedList"
    >
      {props.children}
    </div>
  </div>
);

PickedList.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default PickedList;
