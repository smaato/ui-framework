
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
          <div className="examplesHomeContent">
            <h1 className="examplesHome__title">
              Smaato UI Framework
            </h1>
            <p className="examplesHome__text">
              Click the "Examples" button in the top left corner to view the
              examples.
            </p>
            <p className="examplesHome__text">
              Click the "Source" button in the top right corner to view the
              source code for the example you're viewing.
            </p>
            <p className="examplesHome__text">
              <a
                className="examplesHome__link"
                href="https://github.com/smaato/ui-framework"
              >
                See the full source on GitHub.
              </a>
            </p>
          </div>
        </div>
      </Page>
    );
  }

}
