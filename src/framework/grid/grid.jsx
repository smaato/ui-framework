
import React, {
  Component,
  PropTypes
} from 'react';
import GridSection from './GridSection.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $(window).on('scroll.grid', function() {
      var $body = $("body");
      var scrollTop = $body.scrollTop();
      if(scrollTop > 139) $body.addClass("fixedThead");
      else $body.removeClass("fixedThead");
    });
  }

  componentWillUnmount() {
    $(window).off('scroll.grid');
  }

  render() {
    let data = this.props.data;
    let sectionProps = Object.assign({}, this.props);
    delete sectionProps.data;
    // Enable sticky thead
    let theadData = [data.thead[0], Object.assign({}, data.thead[0])];
    theadData[1].placeholder = true;

    return (
      <div className={[this.props.rootClass, 'container'].join('__')}>
        {/* Sticky header background. TODO: improve */}
        <div className={[this.props.rootClass, 'thead', 'placeholder'].join('__')}>
          <div className={[this.props.rootClass, 'thead', 'placeholder', 'liner'].join('__')}></div>
        </div>
        <div className={[this.props.rootClass, 'table'].join('__')}>
          <GridSection
            {...sectionProps}
            section="thead"
            rows={theadData}
          />
          <GridSection
            {...sectionProps}
            section="tbody"
            rows={data.tbody}
          />
          <GridSection
            {...sectionProps}
            section="tfoot"
            rows={data.tfoot}
          />
        </div>
      </div>
    );
  }

}

Grid.propTypes = {
  rootClass: PropTypes.string,
  data: PropTypes.object
};

Grid.defaultProps = {
  rootClass: 'dataTable'
};
