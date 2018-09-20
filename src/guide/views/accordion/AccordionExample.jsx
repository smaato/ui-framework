
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Accordion,
  AccordionItem,
  Text,
} from '../../../framework/framework';

class AccordionExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: 1,
    };
  }

  onItemClick(index) {
    this.setState({
      activeId: index,
    });
  }

  render() {
    const items = [
      'algebra',
      'data',
      'elaborate',
      'inert',
      'magenta',
      'manual',
      'sphere',
      'vitality',
    ];
    const results = items.map((item, index) => (
      <Text key={index}>{item}</Text>
    ));
    const arrayComponents = [];
    arrayComponents.push(<Text>This is some text.</Text>);
    arrayComponents.push(results);

    return (
      <Page title={this.props.route.name}>
        <Example>
          <Accordion>
            {(new Array(5)).fill(0).map((_, i) => (
              <AccordionItem
                maxHeight="250px"
                onTitleClick={() => null}
                key={i}
                title={`Accordion Reed ${i}`}
              >
                {arrayComponents[i % 2]}
              </AccordionItem>
            ))}
          </Accordion>
        </Example>

        <Example title="Accordion with only one item open">
          <Accordion>
            {(new Array(5)).fill(0).map((_, i) => (
              <AccordionItem
                maxHeight="250px"
                onTitleClick={() => this.onItemClick(i)}
                key={i}
                isActive={this.state.activeId === i}
                title={`Accordion Reed ${i}`}
              >
                {arrayComponents[i % 2]}
              </AccordionItem>
            ))}
          </Accordion>
        </Example>
      </Page>
    );
  }
}

AccordionExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default AccordionExample;
