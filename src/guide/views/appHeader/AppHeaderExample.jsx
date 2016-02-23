
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
  AppHeaderButton,
  AppLogo,
  AppNav,
  AppTitle,
  AppHeaderDivider,
} from '../../../framework/framework';

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

  render() {
    const links = [{
      className: AppNav.ACTIVE_LINK_CLASS_NAME,
      href: '#',
      children: 'Transportation',
    }, {
      href: '#',
      children: 'Camping',
    }, {
      href: '#',
      children: 'Storage',
    }, {
      href: '#',
      children: 'Misc',
    }];

    // react-router's Link component can also be used instead of anchor tag.
    const linkType = 'a';

    return (
      <Page title={this.props.route.name}>

        <Example>
          <AppHeader
            left={
              <AppHeaderDivider
                left={<AppLogo text="Smaato" />}
                right={<AppTitle text="Smaato" />}
              />
            }
            center={
              <AppNav
                linkType={linkType}
                links={links}
              />
            }
            right={
              <AccountNav
                email="han.solo@smaato.com"
                onClick={this.onAccountNavClick.bind(this)}
                isOpen={this.state.isAccountNavOpen}
                disableDropdown
                right={<AppHeaderButton label="Logout"/>}
              />
            }
          />
        </Example>

        <Example title="AppLogo" isDark>
          <Text>Allows the user to add a logo to the AppHeader.</Text>
          <Text>
            Either with a hyperlink:
            <AppLogo href="http://www.smaato.com" text="Smaato" />
          </Text>
          <Text>
            Or without:
            <AppLogo text="Smaato" />
          </Text>
        </Example>

        <Example title="AppTitle" isDark>
          <Text>Allows the user to add a title to the AppHeader.</Text>
          <AppTitle text="Smaato" />
        </Example>

        <Example title="AppHeaderDivider" isDark>
          <Text>
            Allows the user to add two components like AppLogo and AppTitle
            separated by a vertical line to the AppHeader.
          </Text>
          <AppHeaderDivider
            left={<AppLogo text="Smaato" />}
            right={<AppTitle text="Smaato" />}
          />
        </Example>

        <Example title="AppNav" isDark>
          <Text>Allows the user to add a navigation to the AppHeader.</Text>
          <Text>Accepts an array of anchor tags or react-router's
            Link components.</Text>
          <AppNav
            linkType={linkType}
            links={links}
          />
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
          <Text>Renders default account picture when image url is
            not supplied.</Text>
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
