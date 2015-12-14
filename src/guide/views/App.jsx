
// Import exports from various modules.
// NOTE: `import` allows us to tersely specify the individual members we want
// to import from a module with the curly brace syntax and by delimiting
// them with commas.
import React, {
  Component,
} from 'react';

import Navigation from '../components/navigation/Navigation.jsx';

import Route from '../services/route/Route';

// Define the component class and provide it as an export.
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation
          componentRoutes={Route.components}
          integrationRoutes={Route.integrations}
          prototypeRoutes={Route.prototypes}
        />

        {/* Frame the app's different views. */}
        {this.props.children}
      </div>
    );
  }

}

