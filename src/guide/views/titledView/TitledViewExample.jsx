
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
  BodyPanelItem,
  CallOutButton,
  DescriptionText,
  Grid,
  GridHeader,
  GridRow,
  IconCog,
  Text,
  TitleBar,
} from '../../../framework/framework';

export default class TitledViewExample extends Component {

  constructor(props) {
    super(props);

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
