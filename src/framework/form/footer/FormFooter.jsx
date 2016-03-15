
import React, {
  PropTypes,
} from 'react';

const FormFooter = props => {
  let left;

  if (props.left) {
    left = (
      <div className="formFooterSection formFooterSection--left">
        {props.left}
      </div>
    );
  }

  const right = (
    <div className="formFooterSection formFooterSection--right">
      {props.right}
    </div>
  );

  return (
    <div className="formFooter">
      {left}
      {right}
    </div>
  );
};

FormFooter.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any.isRequired,
};

export default FormFooter;
