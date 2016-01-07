
import React, {
  PropTypes,
} from 'react';

export {
  default as AccountNav,
} from './AccountNav.jsx';

export {
  default as AccountPicture,
} from './AccountPicture.jsx';

export {
  default as AppLogo,
} from './AppLogo.jsx';

export {
  default as AppNav,
} from './AppNav.jsx';

export {
  default as AppTitle,
} from './AppTitle.jsx';

export {
  default as AppTitleContainer,
} from './AppTitleContainer.jsx';

export {
  default as AppHeaderDivider,
} from './AppHeaderDivider.jsx';

const AppHeader = props => {
  return (
    <div className="appHeader">
      <div className="appHeader__liner">
        {props.left}
        {props.center}
        {props.right}
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element,
};

export default AppHeader;
