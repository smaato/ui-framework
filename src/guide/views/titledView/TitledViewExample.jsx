
import React, {
  Component,
} from 'react';

import Page from '../../components/page/Page.jsx';

import {
  AccountNav,
  AppHeader,
  AppLogo,
  AppNav,
  AppTitle,
  AppHeaderDivider,
  Body,
  BodyPanel,
  CallOutButton,
  TitleBar,
} from '../../../framework/framework.js';

export default class TitledViewExample extends Component {

  constructor(props) {
    super(props);
  }

  renderAppHeader() {
    const links = [{
      className: 'is-app-nav-link-selected ',
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
          />
        }
      />
    );
  }

  render() {
    const appHeader = this.renderAppHeader();

    return (
      <Page isFullScreen>
        <Body>

          { appHeader }

          <BodyPanel>
            <TitleBar
              label="Title bar example"
              buttons={[
                <CallOutButton
                  iconClasses="glyphicons-plus"
                  label="Add something"
                />,
              ]}
            />
          </BodyPanel>

        </Body>
      </Page>
    );
  }

}
