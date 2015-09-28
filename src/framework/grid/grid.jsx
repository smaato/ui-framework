
import React, {
  Component,
  PropTypes
} from 'react';
import GridSection from './GridSection.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={[this.props.rootClass, 'container'].join('__')}>
        <table className={[this.props.rootClass, 'table'].join('__')}>
          <GridSection
            {...this.props}
            section="thead"
            rows={
              [
                {
                  //placeholder: true,
                  cells: [
                    {
                      content: <span className="checkboxWrapper">
                        <input type="checkbox" name="table_batch" id="table_batch" className="checkbox__input"/>
                        <label htmlFor="table_batch" className="checkbox__faux__input"></label>
                      </span>
                    },
                    {
                      sortable: true,
                      content: 'Name'
                    },
                    {
                      sortable: true,
                      content: 'Status'
                    },
                    {
                      sortable: true,
                      content: 'Fuel'
                    },
                    {
                      sortable: true,
                      content: 'Passengers'
                    },
                    {
                      sortable: true,
                      content: 'Cylinders'
                    },
                    {
                      sortable: true,
                      content: 'Fuel Economy'
                    },
                    {
                      sortable: true,
                      selected: true,
                      reverse: true,
                      content: '# Sold'
                    },
                    {
                      sortable: true,
                      content: 'Registered'
                    },
                    null
                  ]
                }
              ]
            }
            >
          </GridSection>
          <GridSection
            {...this.props}
            section="tbody"
            rows={
              [
                {
                  cells: [
                    {
                      content: <span className="checkboxWrapper">
                        <input type="checkbox" name="item_1" id="item_1" className="checkbox__input"/>
                        <label htmlFor="item_1" className="checkbox__faux__input"></label>
                      </span>
                    },
                    {
                      contentWrap: {
                        modifier: ['link'],
                        href: '#',
                        appendClass: ' blueLink'
                      },
                      content: 'Ford F150'
                    },
                    {
                      contentWrap: {
                        modifier: ['editable'],
                        href: '#'
                      },
                      content: 'In Production'
                    },
                    {
                      contentWrap: {
                        modifier: ['editable'],
                        href: '#'
                      },
                      content: 'Diesel, Unleaded'
                    },
                    {
                      contentWrap: {
                        modifier: ['editable'],
                        href: '#',
                        before: <span className="icon glyphicons-user"></span>
                      },
                      content: '3, 5, 6'
                    },
                    {
                      contentWrap: {
                        modifier: ['editable'],
                        href: '#'
                      },
                      content: '6, 8'
                    },
                    {
                      contentWrap: {
                        modifier: ['editable'],
                        href: '#',
                        after: <span className="icon glyphicons-leaf"></span>
                      },
                      content: '25mpg'
                    },
                    {
                      contentWrap: {
                        modifier: ['readOnly'],
                        href: '#',
                        after: '+2%',
                        afterWrap: {
                          appendClass: 'Change up'
                        }
                      },
                      content: '202.1k'
                    },
                    {
                      contentWrap: {
                        modifier: ['readOnly'],
                        href: '#',
                        after: '-2%',
                        afterWrap: {
                          appendClass: 'Change down'
                        }
                      },
                      content: '200.5k'
                    },
                    {
                      content: <span>
                        <a href="" className="icon glyphicons-more"></a>
                        <a href="" className="icon glyphicons-cogwheel"></a>
                      </span>
                    }
                  ]
                }
              ]
            }
            >
          </GridSection>
          <GridSection
            {...this.props}
            section="tfoot"
            rows={
              [
                {
                  cells: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    {
                      content: '152.1m'
                    },
                    {
                      content: 'Registered'
                    },
                    null
                  ]
                }
              ]
            }
          >
          </GridSection>
        </table>
      </div>
    );
  }

}

Grid.propTypes = {
  rootClass: PropTypes.string
};

Grid.defaultProps = {
  rootClass: 'dataTable'
};
