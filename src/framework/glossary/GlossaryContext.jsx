import PropTypes from 'prop-types';
import React, { createContext } from 'react';

export const GlossaryContext = createContext([]);

export class GlossaryContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const fetchGlossary = async () => {
      const data = await this.props.queryFn();
      this.setState({ data });
    };

    fetchGlossary().catch(() => {});
  }

  render() {
    return (
      <GlossaryContext.Provider value={this.state.data}>
        {this.props.children}
      </GlossaryContext.Provider>
    );
  }
}

GlossaryContextProvider.propTypes = {
  queryFn: PropTypes.func.isRequired,
  children: PropTypes.any,
};
