
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Column,
  ColumnLayout,
} from '../../../framework/framework';

export default class ColumnLayoutExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const backgroundColor = {
      backgroundColor: '#f0f0f0',
    };

    const widths = [1, 2, 3, 4, 5, 6];
    const columns = widths.map(width => {
      const otherWidth = 12 - width;
      return (
        <div style={{ marginBottom: 10 }}>
          <ColumnLayout>
            <Column width={width}>
              <div style={backgroundColor}>{width}</div>
            </Column>
            <Column width={otherWidth}>
              <div style={backgroundColor}>{otherWidth}</div>
            </Column>
          </ColumnLayout>
        </div>
      );
    });

    return (
      <Page title={this.props.route.name}>

        <Example title="Column widths">
          {columns}
        </Example>

        <Example title="2/12th - 6/12th - 4/12th">
          <ColumnLayout>
            <Column width={2}>
              <div style={backgroundColor}>2/12th</div>
            </Column>
            <Column width={6}>
              <div style={backgroundColor}>6/12th</div>
            </Column>
            <Column width={4}>
              <div style={backgroundColor}>4/12th</div>
            </Column>
          </ColumnLayout>
        </Example>

      </Page>
    );
  }

}
