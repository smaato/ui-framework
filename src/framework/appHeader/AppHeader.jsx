
import PropTypes from 'prop-types';
import React from 'react';

export {
  default as AccountNav,
} from './account/AccountNav.jsx';

export {
  default as AccountPicture,
} from './account/AccountPicture.jsx';

export {
  default as AppLogo,
} from './logo/AppLogo.jsx';

export {
  default as AppNav,
} from './nav/AppNav.jsx';

export {
  default as AppHeaderButton,
} from './button/AppHeaderButton.jsx';

export {
  default as AppHeaderDivider,
} from './divider/AppHeaderDivider.jsx';

export {
  default as AppTitle,
} from './title/AppTitle.jsx';

export {
  default as AppTitleContainer,
} from './title/AppTitleContainer.jsx';

const AppHeader = props => (
  <div data-testid="AppHeader" className="appHeader">
    <div className="appHeader__liner">
      {props.left}
      {props.center}
      {props.right}
    </div>
  </div>
);

AppHeader.propTypes = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element,
};

export default AppHeader;
