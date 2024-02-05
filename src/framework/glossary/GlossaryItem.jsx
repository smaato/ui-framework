import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import GlossaryProvider from './GlossaryProvider';
import GlossaryTooltip from './GlossaryTooltip';

function GlossaryItem({ id }) {
  const [glossaryItem, setGlossaryItem] = useState();

  useEffect(() => {
    const onGlossaryLoad = glossary => setGlossaryItem(glossary[id]);
    GlossaryProvider.subscribe(onGlossaryLoad);
    return () => GlossaryProvider.unsubscribe(onGlossaryLoad);
  }, [id]);

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
