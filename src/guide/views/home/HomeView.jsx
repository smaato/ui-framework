
import React from 'react';

import Page from '../../components/page/Page.jsx';

const HomeView = () => (
  <Page>
    <div className="examplesHome">
      <div className="examplesHomeContent">
        <h1 className="examplesHome__title">
          Smaato UI Framework
        </h1>
        <p className="examplesHome__text">
          Click the &quot;Examples&quot; button in the top left corner to
          view the examples.
        </p>
        <p className="examplesHome__text">
          Click the &quot;Source&quot; button in the top right corner to
          view the source code for the example you&apos;re viewing.
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

export default HomeView;
