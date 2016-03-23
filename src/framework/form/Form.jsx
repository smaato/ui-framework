
import React, {
  PropTypes,
} from 'react';

export {
  default as FormPanel,
} from './FormPanel.jsx';

export {
  default as FormFooter,
} from './footer/FormFooter.jsx';

const Form = props => {
  let submitInput;

  if (props.onSubmit) {
    submitInput = <input type="submit" style={{ display: 'none' }} />;
  }

  return (
    <form
      data-id={props.dataId}
      onSubmit={props.onSubmit}
    >
      {props.children}

      {/* Submit form when user hits Enter */}
      {submitInput}
    </form>
  );
};

Form.propTypes = {
  dataId: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.any,
};

export default Form;
