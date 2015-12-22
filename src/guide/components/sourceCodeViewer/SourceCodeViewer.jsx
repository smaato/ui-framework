
import React, {
  Component,
  PropTypes,
} from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import hljs from 'highlight.js';

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
    const self = this;
    $.ajax(`/assets/source/${source}`, {
      success: function success(data) {
        self.setState({
          code: data,
        });
      },
    });
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
