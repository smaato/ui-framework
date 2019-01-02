
import axios from 'axios';
import classNames from 'classnames';
import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

export default class SourceCodeViewer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      code: undefined,
    };
  }

  componentDidMount() {
    this.loadSource(this.props.source);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.source !== this.props.source) {
      this.loadSource(nextProps.source);
    }

    return true;
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.refs.codeBlock);
  }

  loadSource(source) {
    if (source) {
      const self = this;
      axios.get(`./assets/source/${source}`).then((response) => {
        self.setState({
          code: response.data,
        });
      });
    }
  }

  render() {
    const classes = classNames('sourceCodeViewer', {
      'is-source-code-viewer-open': this.props.isOpen,
    });

    return (
      <div className={classes}>
        <pre>
          <code
            ref="codeBlock"
            className="javascript"
          >
            {this.state.code}
          </code>
        </pre>
      </div>
    );
  }

}

SourceCodeViewer.propTypes = {
  source: PropTypes.string,
  isOpen: PropTypes.bool,
};
