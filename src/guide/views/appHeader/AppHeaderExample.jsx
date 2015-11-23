
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  AppAccount,
  AppHeader,
  AppLogo,
  AppNav,
} from '../../../framework/framework.js';

export default class AppHeaderExample extends Component {

  constructor(props) {
    super(props);
  }

  generateLinks() {
    return [
      {
        isSelected: true,
        href: '#',
        text: 'Transportation',
      },
      {
        isSelected: false,
        href: '#',
        text: 'Camping',
      },
      {
        isSelected: false,
        href: '#',
        text: 'Storage',
      },
      {
        isSelected: false,
        href: '#',
        text: 'Misc',
      },
    ];
  }

  render() {
    const links = this.generateLinks();

    return (
      <Page title={this.props.route.name}>

        <Example>
          <AppHeader
            logo={<AppLogo text="Smaato" />}
            nav={<AppNav links={links} />}
            account={
              <AppAccount
                email="han.solo@smaato.com"
              />
            }
          />
        </Example>

        <Example title="AppLogo">
          <Text>Allows the user to add a logo to the AppHeader.</Text>
          <AppLogo text="Smaato" />
        </Example>

        <Example title="AppNav">
          <Text>Allows the user to add a navigation to the AppHeader.</Text>
          <AppNav links={links} />
        </Example>

        <Example title="AppAccount">
          <Text>Allows the user to add account to the AppHeader.</Text>
          <AppAccount
            email="han.solo@smaato.com"
          />
        </Example>

      </Page>
    );
  }

}
