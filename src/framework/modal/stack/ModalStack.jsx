
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalStack = (props) => {
  const modalCount = props.children.length;
  const stackedModals = props.children.map((modal, index) => {
    const depth = modalCount - index;
    const isDepthMax = depth > 3;
    const stackedModalClasses = classNames(
      'stackedModal',
      isDepthMax ? 'stackedModal--depthMax' : `stackedModal--depth${depth}`
    );

    return (
      <div
        className={stackedModalClasses}
        key={index}
      >
        {modal}
      </div>
    );
  });

  return (
    <div className="modalStack">
      {stackedModals}
    </div>
  );
};

ModalStack.propTypes = {
  children: PropTypes.any,
};

export default ModalStack;
