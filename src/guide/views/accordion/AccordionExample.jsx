
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Accordion,
  AccordionItem,
  Text,
} from '../../../framework/framework';

const AccordionExample = (props) => {
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
    <Page title={props.route.name}>
      <Example title="Accordion">
        <Accordion activeID={0} maxHeight="100px">
          {[0, 1, 2, 3].map(i => (
            <AccordionItem key={i} title={i}>
              {arrayComponents[i % 2]}
            </AccordionItem>
          ))}
        </Accordion>
      </Example>
    </Page>
  );
};

AccordionExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default AccordionExample;
