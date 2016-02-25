
import React, {
  PropTypes,
} from 'react';

const Form = props => {
  return (
    <div
      data-id={props.dataId}
      className="form"
    >
      {props.body}
      {props.footer}
    </div>
  );
};

Form.propTypes = {
  dataId: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  footer: PropTypes.element,
};

export default Form;
