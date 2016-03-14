
import React, {
  Component,
  PropTypes,
} from 'react';

import Page from '../../components/page/Page.jsx';

import {
  AccountNav,
  AppHeader,
  AppLogo,
  AppNav,
  AppTitleContainer,
  AppHeaderDivider,
  Body,
  BodyPanel,
  BodyPanelItem,
  CallOutButton,
  DateRange,
  IconEllipsis,
  OrganizationSwitcher,
  OrganizationSwitcherItem,
  TitleBar,
  ViewHeader,
  ViewHeaderNav,
} from '../../../framework/framework';

import GridExample from './GridExample.jsx';

export default class GridViewExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOrganizationSwitcherOpen: false,
    };

    this.onCloseOrganizationSwitcher =
      this.onCloseOrganizationSwitcher.bind(this);

    this.onOpenOrganizationSwitcher =
      this.onOpenOrganizationSwitcher.bind(this);

    this.onSearch = this.onSearch.bind(this);

    this.selectOrganization = this.selectOrganization.bind(this);
  }

  onCloseOrganizationSwitcher() {
    this.setState({
      isOrganizationSwitcherOpen: false,
    });
  }

  onOpenOrganizationSwitcher() {
    this.setState({
      isOrganizationSwitcherOpen: true,
    });
  }

  onSearch(term) {
    window.alert(term); // eslint-disable-line no-alert
  }

  selectOrganization(organization) {
    window.alert(organization); // eslint-disable-line no-alert
  }

  renderOrganizationSwitcher() {
    if (!this.state.isOrganizationSwitcherOpen) {
      return undefined;
    }

    const orgs = [{
      id: 0,
      name: 'Algebra',
    }, {
      id: 1,
      name: 'Data',
    }, {
      id: 2434895743333,
      name: 'Elaborate very long example name',
    }, {
      id: 3,
      name: 'Inert',
    }, {
      id: 4,
      name: 'Magenta',
    }, {
      id: 5,
      name: 'Data',
    }, {
      id: 6,
      name: 'Manual',
    }, {
      id: 7,
      name: 'Sphere',
    }, {
      id: 8,
      name: 'Vitality',
    }];

    const organizationList = orgs.map((item, index) => (
      <OrganizationSwitcherItem
        key={index}
        name={item.name}
        id={item.id.toString()}
        onSelect={this.selectOrganization.bind(this, item)} // eslint-disable-line react/jsx-no-bind
      />
    ));

    return (
      <OrganizationSwitcher
        title="Switch buyer"
        searchPrompt="Search by Buyer Name or ID"
        onSearch={this.onSearch}
        onClose={this.onCloseOrganizationSwitcher}
      >
        {organizationList}
      </OrganizationSwitcher>
    );
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
            right={
              <AppTitleContainer
                title="Smaato"
                onClick={this.onOpenOrganizationSwitcher}
              >
                {this.renderOrganizationSwitcher()}
              </AppTitleContainer>
            }
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

  renderViewHeader() {
    const links = [{
      className: 'is-view-header-nav-link-selected',
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-car viewHeaderNav__link__icon" />
          Automobile
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-train viewHeaderNav__link__icon" />
          Train
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span
            className="icon glyphicons-airplane viewHeaderNav__link__icon"
          />
          Airplane
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-bicycle viewHeaderNav__link__icon" />
          Bicycle
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span
            className="icon glyphicons-person-walking viewHeaderNav__link__icon"
          />
          Walking
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span className="viewHeaderNav__ellipsis">
          <IconEllipsis/>
        </span>
      ),
    }];

    // react-router's Link component can also be used instead of anchor tag.
    const linkType = 'a';

    return (
      <ViewHeader
        left={
          <ViewHeaderNav
            linkType={linkType}
            links={links}
          />
        }
        right={<DateRange/>}
      />
    );
  }

  render() {
    return (
      <Page isFullScreen>
        <Body>

          { this.renderAppHeader() }

          { this.renderViewHeader() }

          <BodyPanel isTopFlush>
            <BodyPanelItem>
              <TitleBar
                label="Title bar example"
                buttons={[
                  <CallOutButton
                    iconClasses="glyphicons-plus"
                    label="Add something"
                  />,
                ]}
              />
            </BodyPanelItem>

            <BodyPanelItem rhythm={BodyPanelItem.RHYTHM.LARGE}>
              <GridExample />
            </BodyPanelItem>
          </BodyPanel>

        </Body>
      </Page>
    );
  }

}

GridViewExample.propTypes = {
  route: PropTypes.object.isRequired,
};
