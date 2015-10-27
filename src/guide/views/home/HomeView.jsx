
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
          <h1>Welcome to the Smaato UI Framework.</h1>
          <p>Click the "Nav" button in the top left corner to view the examples.</p>
        </div>
      </Page>
    );
  }

}
