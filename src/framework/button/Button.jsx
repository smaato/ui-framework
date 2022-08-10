
import classNames from 'classnames';
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  function onClick(event) {
    // onClick is optional, so exit early if it doesn't exist.
    if (!props.onClick) {
      return;
    }

    // Don't even trigger the onClick handler if we're disabled.
    if (props.disabled) {
      return;
    }

    props.onClick(props.data);

    // Prevent other behaviour that props.onClick to be executed.
    event.preventDefault();
  }

  const classes = classNames('button', props.classes, {
    'is-button-disabled': props.disabled,
    'is-button-selected': props.selected,
  });

  let icon;

  if (props.type) {
    const typeToIconClassMap = {
      [Button.TYPE.ADD]: 'icon-plus-white',
      [Button.TYPE.DEAL]: 'icon-deal',
      [Button.TYPE.EXCHANGE]: 'icon-exchange',
      [Button.TYPE.LOG]: 'icon-history-blue',
      [Button.TYPE.PRIVATE_DEAL]: 'icon-private-deal',
    };

    const iconClasses = classNames(
      'button__icon icon',
      typeToIconClassMap[props.type]
    );

    icon = <span className={iconClasses} />;
  }

  let children;

  if (props.children) {
    children = (
      <span className="button__label">
        {props.children}
      </span>
    );
  }

  const linkType = props.href ? 'a' : 'button';

  return React.createElement(
    linkType,
    {
      "data-testid": "Button",
      'data-id': props.dataId,
      className: classes,
      href: props.href,
      onClick,
    },
    icon,
    children
  );
};

Button.TYPE = keyMirror({
  ADD: null,
  DEAL: null,
  EXCHANGE: null,
  LOG: null,
  PRIVATE_DEAL: null,
});

Button.propTypes = {
  dataId: PropTypes.string,
  data: PropTypes.any,
  children: PropTypes.any,
  type: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Button;
