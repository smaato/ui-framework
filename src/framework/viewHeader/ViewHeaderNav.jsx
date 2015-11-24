
import React from 'react';

const ViewHeaderNav = () => {
  return (
    <ul className="secondaryNavBar__linksContainer">
      <li className="secondaryNavBar__link">
        <a href="#" className="selected">
          <span className="icon glyphicons-car" />
          Automobile
        </a>
      </li>
      <li className="secondaryNavBar__link">
        <a href="#">
          <span className="icon glyphicons-train" />
          Train
        </a>
      </li>
      <li className="secondaryNavBar__link">
        <a href="#">
          <span className="icon glyphicons-airplane" />
          Airplane
        </a>
      </li>
      <li className="secondaryNavBar__link">
        <a href="#">
          <span className="icon glyphicons-bicycle" />
          Bicycle
        </a>
      </li>
      <li className="secondaryNavBar__link">
        <a href="#">
          <span className="icon glyphicons-person-walking" />
          Walking
        </a>
      </li>
      <li className="secondaryNavBar__ellipsis glyphicons-more" />
    </ul>
  );
};

export default ViewHeaderNav;
