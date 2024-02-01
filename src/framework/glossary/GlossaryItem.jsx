import PropTypes from 'prop-types';
import React, { useContext, useMemo } from 'react';
import { GlossaryContext } from './GlossaryContext';
import GlossaryTooltip from './GlossaryTooltip';

function GlossaryItem({ id }) {
  const glossary = useContext(GlossaryContext);
  const glossaryItem = useMemo(
    () => glossary.find(item => item.identifier === id),
    [id, glossary]
  );

  if (glossaryItem) {
    return (
      <GlossaryTooltip
        message={glossaryItem.definition}
        link={glossaryItem.link}
      />
    );
  }

  return null;
}

GlossaryItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default GlossaryItem;
