
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
    this.state = {
      isAccountNavOpen: false,
    };
  }

  onAccountNavClick() {
    this.setState({
      isAccountNavOpen: !this.state.isAccountNavOpen,
    });
  }

  generateLinks() {
    const linksConfig = [
      {
        active: true,
        href: '#',
        text: 'Transportation',
      },
      {
        active: false,
        href: '#',
        text: 'Camping',
      },
      {
        active: false,
        href: '#',
        text: 'Storage',
      },
      {
        active: false,
        href: '#',
        text: 'Misc',
      },
    ];

    return linksConfig.map(link => {
      const activeClass = link.active ? 'selected' : null;
      return (
        // react-router's Link component can also be used instead of anchor tag
        <a href={link.href} className={activeClass}>
          {link.text}
        </a>
      );
    });
  }

  render() {
    const links = this.generateLinks();

    return (
      <Page title={this.props.route.name}>

        <Example>
          <AppHeader
            left={<AppLogo text="Smaato" />}
            center={<AppNav anchors={links} />}
            right={
              <AccountNav
                email="han.solo@smaato.com"
                onClick={this.onAccountNavClick.bind(this)}
                isOpen={this.state.isAccountNavOpen}
              />
            }
          />
        </Example>

        <Example title="AppLogo" isDark>
          <Text>Allows the user to add a logo to the AppHeader.</Text>
          <AppLogo text="Smaato" />
        </Example>

        <Example title="AppNav" isDark>
          <Text>Allows the user to add a navigation to the AppHeader.</Text>
          <Text>Accepts an array of anchor tags or react-router's Link components.</Text>
          <AppNav anchors={links} />
        </Example>

        <Example title="AccountNav" isDark>
          <Text>Allows the user to add account navigation.</Text>
          <AccountNav
            email="han.solo@smaato.com"
            pictureUrl="http://pipsum.com/22x22.jpg"
            onClick={this.onAccountNavClick.bind(this)}
            isOpen={this.state.isAccountNavOpen}
          />
        </Example>

        <Example title="AccountPicture default">
          <Text>Renders default account picture when image url is not supplied.</Text>
          <AccountPicture />
        </Example>

        <Example title="AccountPicture">
          <Text>Renders user account picture with supplied image url.</Text>
          <AccountPicture
            url="http://pipsum.com/22x22.jpg"
          />
        </Example>

      </Page>
    );
  }

}
