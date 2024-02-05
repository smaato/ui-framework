import PropTypes from 'prop-types';
import React from 'react';

const GLOSSARY_LOADED_EVENT = 'GLOSSARY_LOADED_EVENT';
const GLOSSARY_STATUS = {
  UNLOADED: 'UNLOADED',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  FAILED: 'FAILED',
};

class GlossaryProvider extends React.Component {
  static data = {};
  static status = GLOSSARY_STATUS.UNLOADED;

  componentDidMount() {
    const fetchGlossary = async () => {
      GlossaryProvider.status = GLOSSARY_STATUS.LOADING;

      const data = await this.props.queryFn();

      GlossaryProvider.status = GLOSSARY_STATUS.LOADED;
      GlossaryProvider.data = data;

      const event = new CustomEvent(GLOSSARY_LOADED_EVENT, { detail: GlossaryProvider.data });
      document.dispatchEvent(event);
    };

    fetchGlossary().catch(() => GlossaryProvider.status = GLOSSARY_STATUS.FAILED);
  }

  static subscribe = (listener) => {
    if (!listener) {
      throw new Error('Listener function not passed to subscribe.');
    }

    if (GlossaryProvider.status === GLOSSARY_STATUS.LOADED) {
      listener(GlossaryProvider.data);
    }

    document.addEventListener(GLOSSARY_LOADED_EVENT, listener);
  }

  static unsubscribe = (listener) => {
    if (!listener) {
      throw new Error('Listener function not passed to unsubscribe.');
    }

    document.removeEventListener(GLOSSARY_LOADED_EVENT, listener);
  }

  render() {
    return this.props.children;
  }
}

GlossaryProvider.propTypes = {
  queryFn: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default GlossaryProvider;
