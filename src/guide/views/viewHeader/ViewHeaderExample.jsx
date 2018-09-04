
import PropTypes from 'prop-types';
import React from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  DateRange,
  ViewHeader,
  ViewHeaderNav,
} from '../../../framework/framework';

const ViewHeaderExample = (props) => {
  const links = [{
    className: 'is-view-header-nav-link-selected',
    href: '#',
    children: (
      <span>
        <span className="viewHeaderNav__link__icon icon icon-document" />
        Automobile
      </span>
    ),
  }, {
    href: '#',
    children: (
      <span>
        <span className="viewHeaderNav__link__icon icon icon-document" />
        Train
      </span>
    ),
  }, {
    href: '#',
    children: (
      <span>
        <span
          className="viewHeaderNav__link__icon icon icon-document"
        />
        Airplane
      </span>
    ),
  }, {
    href: '#',
    children: (
      <span>
        <span className="viewHeaderNav__link__icon icon icon-document" />
        Bicycle
      </span>
    ),
  }, {
    href: '#',
    children: (
      <span>
        <span
          className="viewHeaderNav__link__icon icon icon-document"
        />
        Walking
      </span>
    ),
  }, {
    href: '#',
    children: (
      <span className="viewHeaderNav__ellipsis icon icon-ellipsis" />
    ),
  }];

  // react-router's Link component can also be used instead of anchor tag.
  const linkType = 'a';

  return (
    <Page title={props.route.name}>

      <Example>
        <ViewHeader
          left={
            <ViewHeaderNav
              linkType={linkType}
              links={links}
            />
          }
          right={<DateRange />}
        />
      </Example>

      <Example title="ViewHeaderNav" isDark>
        <Text>Allows the user to add a navigation to the ViewHeader.</Text>
        <ViewHeaderNav
          linkType={linkType}
          links={links}
        />
      </Example>

      <Example title="DateRange" isDark>
        <Text>Allows the user to select a date range.</Text>
        <DateRange isLeft />
      </Example>

    </Page>
  );
};

ViewHeaderExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default ViewHeaderExample;
