
import React, {
  PropTypes,
} from 'react';

export {
  default as PickedListItem,
} from './PickedListItem.jsx';

const PickedList = props => (
  <div className="pickedListContainer">
    <div className="pickedListTitle">
      {props.title}
    </div>
    <div className="pickedList">
      {props.children}
    </div>
  </div>
);

PickedList.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default PickedList;
