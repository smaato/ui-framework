
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  AccountNav,
  AccountPicture,
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
            account={<AccountNav email="han.solo@smaato.com"/>}
          />
        </Example>

        <Example title="AppLogo" isDark>
          <Text>Allows the user to add a logo to the AppHeader.</Text>
          <AppLogo text="Smaato" />
        </Example>

        <Example title="AppNav" isDark>
          <Text>Allows the user to add a navigation to the AppHeader.</Text>
          <AppNav links={links} />
        </Example>

        <Example title="AccountNav" isDark>
          <Text>Allows the user to add account navigation.</Text>
          <AccountNav
            email="han.solo@smaato.com"
            pictureUrl="http://lorempixel.com/output/people-q-c-22-22-9.jpg"
          />
        </Example>

        <Example title="AccountPicture">
          <Text>Allows the user to add account picture.</Text>
          <AccountPicture
            url="http://lorempixel.com/output/business-q-c-22-22-1.jpg"
          />
        </Example>

      </Page>
    );
  }

}
