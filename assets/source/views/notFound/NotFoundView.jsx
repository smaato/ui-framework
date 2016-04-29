
// Import exports from various modules.
import React, {
  Component,
} from 'react';

import Page from '../../components/page/Page.jsx';

// Define the component class and provide it as an export.
export default class HomeView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <div className="examplesHome">
          <h1>Page not found.</h1>
        </div>
      </Page>
    );
  }

}
