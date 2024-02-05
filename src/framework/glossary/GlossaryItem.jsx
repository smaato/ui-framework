import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GlossaryProvider from './GlossaryProvider';
import GlossaryTooltip from './GlossaryTooltip';

class GlossaryItem extends Component {
  state = {
    glossaryItem: null,
  };

  onGlossaryLoad = glossary => this.setState({ glossaryItem: glossary[id] });

  componentDidMount() {
    GlossaryProvider.subscribe(this.onGlossaryLoad);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      GlossaryProvider.unsubscribe(this.onGlossaryLoad);
      GlossaryProvider.subscribe(this.onGlossaryLoad);
    }
  }

  componentWillUnmount() {
    GlossaryProvider.unsubscribe(this.onGlossaryLoad);
  }

  render() {
    const { glossaryItem } = this.state;

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
}

GlossaryItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default GlossaryItem;
