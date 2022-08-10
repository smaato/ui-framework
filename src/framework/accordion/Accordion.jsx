
import PropTypes from 'prop-types';
import React from 'react';

import AccordionItem from './../accordionItem/AccordionItem.jsx';

const Accordion = (props) => {
  const wrapperStyle = {
    width: props.width,
  };

  return (
    <div data-testid="Accordion" className="accordion" style={wrapperStyle}>
      {props.children}
    </div>
  );
};

Accordion.defaultProps = {
  width: '210px',
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(AccordionItem),
  width: PropTypes.string,
};

export default Accordion;
