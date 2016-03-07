
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as FormFooter,
} from './footer/FormFooter.jsx';

const Form = props => {
  const classes = classNames('form', props.className, {
    'form--page': props.pageForm,
    'form--modal': !props.pageForm,
  });

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
      className={classes}
    >
      {props.body}
      {footer}
    </div>
  );
};

Form.propTypes = {
  pageForm: PropTypes.bool,
  dataId: PropTypes.string,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default Form;
