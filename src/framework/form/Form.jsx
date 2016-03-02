
import React, {
  PropTypes,
} from 'react';

export {
  default as FormFooter,
} from './footer/FormFooter.jsx';

const Form = props => {
  let footer;

  if (props.footer) {
    footer = (
      <div className="formSection formSection--footer">
        {props.footer}
      </div>
    );
  }

  return (
    <div
      data-id={props.dataId}
      className="form"
    >
      {props.body}
      {footer}
    </div>
  );
};

Form.propTypes = {
  dataId: PropTypes.string,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default Form;
