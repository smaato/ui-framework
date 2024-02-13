import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  safePolygon,
} from '@floating-ui/react';

function GlossaryTooltip({ message, link }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    strategy: 'fixed',
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift(),
    ],
  });

  const hover = useHover(context, { move: false, handleClose: safePolygon() });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <Fragment>
      <button
        className="glossaryTooltip__icon icon icon-info"
        ref={refs.setReference}
        type="button"
        {...getReferenceProps()}
      />

      {isOpen && (
        <FloatingPortal>
          <div
            onClick={(e) => e.stopPropagation()}
            className="glossaryTooltip__tooltip"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <div className="glossaryTooltip__content">{message}</div>
            {link && (
              <a
                className="glossaryTooltip__link"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn More
              </a>
            )}
          </div>
        </FloatingPortal>
      )}
    </Fragment>
  );
}

GlossaryTooltip.propTypes = {
  link: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default GlossaryTooltip;
