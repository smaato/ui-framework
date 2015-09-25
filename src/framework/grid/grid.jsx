
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
      <div className={this.props.rootClass + '__container'}>
        <table className={this.props.rootClass + '__table'}>
          <GridSection
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
                      content: <a>
                        Name
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    {
                      sortable: true,
                      content: <a>
                        Status
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    {
                      sortable: true,
                      content: <a>
                        Fuel
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    {
                      sortable: true,
                      content: <a>
                        Passangers
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    {
                      sortable: true,
                      content: <a>
                        Cylinders
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    {
                      sortable: true,
                      content: <a>
                        Fuel Economy
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    {
                      sortable: true,
                      selected: true,
                      reverse: true,
                      content: <a>
                        # Sold
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    {
                      sortable: true,
                      content: <a>
                        Registered
                        <span className="arrowUp">
                          <span className="arrowUp__centerLine"></span>
                        </span>
                        <span className="arrowDown">
                          <span className="arrowDown__centerLine"></span>
                        </span>
                      </a>
                    },
                    null
                  ]
                }
              ]
            }
            >
          </GridSection>
          <GridSection
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
                      content: <a href="#" className={this.props.rootClass + '__tbody__cellValue--link blueLink'}>Ford F150</a>
                    },
                    {
                      content: <a href="#" className={this.props.rootClass + '__tbody__cellValue--editable'}>In Production</a>
                    },
                    {
                      content: <a href="#" className={this.props.rootClass + '__tbody__cellValue--editable'}>Diesel, Unleaded</a>
                    },
                    {
                      content: <a href="#" className={this.props.rootClass + '__tbody__cellValue--editable'}>
                        <span className="icon glyphicons-user"></span>
                        3, 5, 6
                      </a>
                    },
                    {
                      content: <a href="#" className={this.props.rootClass + '__tbody__cellValue--editable'}>6, 8</a>
                    },
                    {
                      content: <a href="#" className={this.props.rootClass + '__tbody__cellValue--editable'}>
                        25mpg
                        <span className="icon glyphicons-leaf"></span>
                      </a>
                    },
                    {
                      content: <span className={this.props.rootClass + '__tbody__cellValue--readOnly'}>
                        202.1k
                        <span className={this.props.rootClass + '__tbody__cellChange up'}>+2%</span>
                      </span>
                    },
                    {
                      content: <span className={this.props.rootClass + '__tbody__cellValue--readOnly'}>
                        200.5k
                        <span className={this.props.rootClass + '__tbody__cellChange down'}>-2%</span>
                      </span>
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
            section="tfoot"
            rows={
              [
                {
                  whatever: 'whatever',
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
