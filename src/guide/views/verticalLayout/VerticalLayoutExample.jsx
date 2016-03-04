
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  VerticalLayout,
} from '../../../framework/framework';

class LabelExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Text>
            This component is responsible for positioning its children. It has
            no "aesthetic" styles. It enforces a regular vertical rhythm by
            adding a fixed amount of space between each of its children.
          </Text>
          <VerticalLayout>
            <div>First item</div>
            <div>Second item</div>
            <div>Third item</div>
            <div>Fourth item</div>
          </VerticalLayout>
        </Example>
      </Page>
    );
  }

}

LabelExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default LabelExample;
