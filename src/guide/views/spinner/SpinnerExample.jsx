
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { Spinner } from '../../../framework/framework';

class SpinnerExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <Spinner />
        </Example>

      </Page>
    );
  }

}

SpinnerExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default SpinnerExample;
