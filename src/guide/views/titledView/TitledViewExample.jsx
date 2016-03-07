
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
  DescriptionText,
  Grid,
  GridHeader,
  GridRow,
  IconCog,
  OrganizationSwitcher,
  OrganizationSwitcherItem,
  Text,
  TitleBar,
} from '../../../framework/framework';

export default class TitledViewExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOrganizationSwitcherOpen: false,
    };

    this.COLUMNS_COUNT = 3;
    this.ROW_HEIGHT = 55;

    this.headerCellPropsProviders = [
      () => ({
        children: 'Name',
      }), () => ({
        children: 'QPS Limit',
      }), () => undefined,
    ];

    this.rowCellPropsProviders = [
      item => ({
        children: (
          <div>
            <Text rhythm={Text.RHYTHM.XSMALL}>{item.name}</Text>
            <DescriptionText>{item.url}</DescriptionText>
          </div>
        ),
      }), item => ({
        children: item.qps_limit,
      }), () => ({
        children: <IconCog />,
      }),
    ];

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
    console.log(term); // eslint-disable-line no-console
  }

  getRows() {
    const endpoints = [{
      name: 'Example Endpoint 1',
      qps_limit: 10000,
      url: 'http://www.smaato.com/example-endpoint-1/',
    }, {
      name: 'Example Endpoint 2',
      qps_limit: 10000,
      url: 'http://www.smaato.com/example-endpoint-2/',
    }, {
      name: 'Example Endpoint 3',
      qps_limit: 10000,
      url: 'http://www.smaato.com/example-endpoint-3/',
    }];

    const rows = [];

    for (let i = 0, l = endpoints.length; i < l; i++) {
      rows.push(
        <GridRow
          item={endpoints[i]}
          height={this.ROW_HEIGHT}
          key={i}
          rowCellPropsProviders={this.rowCellPropsProviders}
        />
      );
    }

    return rows;
  }

  selectOrganization(organization) {
    console.log(organization); // eslint-disable-line no-console
  }

  renderOrganizationSwitcher() {
    if (!this.state.isOrganizationSwitcherOpen) {
      return;
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

    return ( // eslint-disable-line consistent-return
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

  render() {
    const appHeader = this.renderAppHeader();

    return (
      <Page isFullScreen>
        <Body>

          { appHeader }

          <BodyPanel>
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
              <Grid
                columnsCount={this.COLUMNS_COUNT}
                header={
                  <GridHeader
                    headerCellPropsProviders={this.headerCellPropsProviders}
                  />
                }
                rows={this.getRows()}
              />
            </BodyPanelItem>
          </BodyPanel>

        </Body>
      </Page>
    );
  }

}

TitledViewExample.propTypes = {
  route: PropTypes.object.isRequired,
};
