
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  DateRange,
  IconEllipsis,
  ViewHeader,
  ViewHeaderNav,
} from '../../../framework/framework.js';

export default class ViewHeaderExample extends Component {

  constructor(props) {
    super(props);
  }

  generateLinks() {
    const linksConfig = [
      {
        active: true,
        href: '#',
        content: (
          <span>
            <span className="icon glyphicons-car" />
            Automobile
          </span>
        ),
      },
      {
        active: false,
        href: '#',
        content: (
          <span>
            <span className="icon glyphicons-train" />
            Train
          </span>
        ),
      },
      {
        active: false,
        href: '#',
        content: (
          <span>
            <span className="icon glyphicons-airplane" />
            Airplane
          </span>
        ),
      },
      {
        active: false,
        href: '#',
        content: (
          <span>
            <span className="icon glyphicons-bicycle" />
            Bicycle
          </span>
        ),
      },
      {
        active: false,
        href: '#',
        content: (
          <span>
            <span className="icon glyphicons-person-walking" />
            Walking
          </span>
        ),
      },
      {
        active: false,
        href: '#',
        content: (
          <span className="viewHeaderNav__ellipsis">
            <IconEllipsis/>
          </span>
        ),
      },
    ];

    return linksConfig.map(link => {
      const activeClass = link.active ? 'selected' : null;
      return (
        // react-router's Link component can also be used instead of anchor tag
        <a href={link.href} className={activeClass}>
          {link.content}
        </a>
      );
    });
  }

  render() {
    const links = this.generateLinks();

    return (
      <Page title={this.props.route.name}>

        <Example>
          <ViewHeader
            left={<ViewHeaderNav anchors={links}/>}
            right={<DateRange/>}
          />
        </Example>

        <Example title="ViewHeaderNav" isDark>
          <Text>Allows the user to add a navigation to the ViewHeader.</Text>
          <ViewHeaderNav anchors={links} />
        </Example>

      </Page>
    );
  }

}
