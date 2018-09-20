
// Import exports from various modules.
// NOTE: `import` allows us to tersely specify the individual members we want
// to import from a module with the curly brace syntax and by delimiting
// them with commas.
import classNames from 'classnames';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import { Link } from 'react-router';

import Navigation from '../components/navigation/Navigation.jsx';
import SourceCodeViewer
  from '../components/sourceCodeViewer/SourceCodeViewer.jsx';

import Route from '../services/route/Route';

// Define the component class and provide it as an export.
export default class AppView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSourceCodeViewerOpen: false,
      isMenuOpen: false,
    };

    this.onClickNavItem = this.onClickNavItem.bind(this);
    this.onToggleNav = this.onToggleNav.bind(this);
    this.onToggleSourceCodeViewer = this.onToggleSourceCodeViewer.bind(this);
  }

  componentDidMount() {
    const self = this;
    $(document).keypress((event) => {
      // Toggle source code viewer with ~, or ALT/OPTION + 1.
      if ((event.charCode === 96) || (event.altKey && event.charCode === 161)) {
        self.onToggleSourceCodeViewer();
      }
    });
  }

  onClickNavItem() {
    this.setState({
      isMenuOpen: false,
    });
  }

  onToggleNav() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  onToggleSourceCodeViewer() {
    this.setState({
      isSourceCodeViewerOpen: !this.state.isSourceCodeViewerOpen,
    });
  }

  render() {
    const routes = this.props.routes;
    const source = routes[routes.length - 1].source;

    const classes = classNames('app', {
      'is-source-code-viewer-open': this.state.isSourceCodeViewerOpen,
    });

    return (
      <div className={classes}>
        <div
          className="examplesNavMenuButton"
          onClick={this.onToggleNav}
        >
          Examples
        </div>

        <Link
          className="examplesNavMenuButton examplesNavMenuButton--home"
          to="/"
        >
          Home
        </Link>

        <Navigation
          onClickNavItem={this.onClickNavItem}
          isMenuOpen={this.state.isMenuOpen}
          componentRoutes={Route.components}
          integrationRoutes={Route.integrations}
        />

        {/* Frame the app's different views. */}
        {this.props.children}

        <SourceCodeViewer
          source={source}
          isOpen={this.state.isSourceCodeViewerOpen}
        />

        <div
          className="examplesSourceCodeViewerButton"
          onClick={this.onToggleSourceCodeViewer}
        >
          Source
        </div>
      </div>
    );
  }

}

AppView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  routes: PropTypes.array.isRequired,
};
