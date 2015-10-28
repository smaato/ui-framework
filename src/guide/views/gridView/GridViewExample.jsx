
import React, {
  Component,
} from 'react';

import Page from '../../components/page/Page.jsx';

export default class GridViewExample extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Add scroll handler when we view this page.
    const $window = $(window);
    const $body = $('body');
    $window.scroll(() => {
      const scrollTop = $body.scrollTop();
      if (scrollTop > 139) {
        $body.addClass('fixedThead');
      } else {
        $body.removeClass('fixedThead');
      }
    });
  }

  shouldComponentUpdate() {
    // Stop React from affecting this page so we can use jQuery instead.
    return false;
  }

  componentWillUnmount() {
    // Remove scroll handler when we leave this page.
    const $window = $(window);
    $window.off('scroll');
  }

  render() {
    // Build the rows using a for-loop.
    const rows = [];
    for (let i = 0; i < 300; i++) {
      rows.push(
        <div className="dataTable__tbody__row" key={i}>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <span className="checkboxWrapper">
                <input type="checkbox" name="item_1" id="item_1" className="checkbox__input" />
                <label htmlFor="item_1" className="checkbox__faux__input"></label>
              </span>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <a href="#" className="dataTable__tbody__cellValue--link blueLink">Ford F150</a>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <a href="#" className="dataTable__tbody__cellValue--editable">In Production</a>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <a href="#" className="dataTable__tbody__cellValue--editable">Diesel, Unleaded</a>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <a href="#" className="dataTable__tbody__cellValue--editable">
                <span className="icon glyphicons-user"></span>3, 5, 6</a>
              </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <a href="#" className="dataTable__tbody__cellValue--editable">6, 8</a>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <a href="#" className="dataTable__tbody__cellValue--editable">25mpg<span className="icon glyphicons-leaf"></span></a>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <span className="dataTable__tbody__cellValue--readOnly">202.1k<span className="dataTable__tbody__cellChange up">+2%</span></span>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <span className="dataTable__tbody__cellValue--readOnly">200.5k<span className="dataTable__tbody__cellChange down">-2%</span></span>
            </span>
          </div>
          <div className="dataTable__tbody__cell">
            <span className="dataTable__tbody__cellLiner">
              <a href="" className="icon glyphicons-more"></a>
              <a href="" className="icon glyphicons-cogwheel"></a>
            </span>
          </div>
        </div>
      );
    }

    return (
      <Page isFullScreen>

        <div className="mainNavBar">

          <div className="mainNavBar__liner">

            <a className="mainNavBar__account">
              <span className="icon glyphicons-user"></span>
              <label>han.solo@smaato.com</label>
              <span className="dropdownArrow"></span>
            </a>

            <a className="mainNavBar__logo" href="#">Smaato</a>

            <ul className="mainNavBar__links__container">
              <li className="mainNavBar__link selected"><a href="#">Transportation</a></li>
              <li className="mainNavBar__link"><a href="#">Camping</a></li>
              <li className="mainNavBar__link"><a href="#">Storage</a></li>
              <li className="mainNavBar__link"><a href="#">Misc</a></li>
            </ul>

          </div>

        </div>

        <div className="secondaryNavBar">

          <div className="secondaryNavBar__liner">

            <div className="secondaryNavBar__linksWrapper">

              <ul className="secondaryNavBar__linksContainer">

                <li className="secondaryNavBar__link selected">
                  <a href="#"><span className="icon glyphicons-car"></span>Automobile</a>
                </li>
                <li className="secondaryNavBar__link">
                  <a href="#"><span className="icon glyphicons-train"></span>Train</a>
                </li>
                <li className="secondaryNavBar__link">
                  <a href="#"><span className="icon glyphicons-airplane"></span>Airplane</a>
                </li>
                <li className="secondaryNavBar__link">
                  <a href="#"><span className="icon glyphicons-bicycle"></span>Bicycle</a>
                </li>
                <li className="secondaryNavBar__link">
                  <a href="#"><span className="icon glyphicons-person-walking"></span>Walking</a>
                </li>

                <li className="secondaryNavBar__ellipsis glyphicons-more"></li>

                <li className="secondaryNavBar__mask">
                  <div className="secondaryNavBar__maskInner"></div>
                </li>

              </ul>
            </div>

            <ul className="dateRange">
              <li className="dateRange__option dateRange__option--required">
                <a className="dateRange__trigger">
                  <span className="icon glyphicons-calendar"></span>Jul 18-Jul 28
                </a>
              </li>
              <li className="dateRange__option">
                <label className="dateRange__compareToggle"><input type="checkbox" /> Compare</label>
              </li>
              <li className="dateRange__option">
                <span className="dateRange__goTo">
                  <a className="prev" href="">
                    <span className="prevArrow"></span>
                  </a>
                  <a className="next" href="">
                    <span className="nextArrow"></span>
                  </a>
                  <span className="clear"></span>
                </span>
              </li>
            </ul>

          </div>

        </div>

        <div className="titleBar">

          <label className="titleBar__title">
            Cars, Trucks, &amp; Motorcycles
          </label>

          <div className="titleBar__buttonContainer">
            <a className="titleBarButton button button--primary" href="">
              <span className="titleBarButton__icon glyphicons-plus"></span>
              New Automobile
            </a>
          </div>

        </div>

        <div className="dataTable__tableControls">

          <div className="dataTable__tableControls__liner">

            <div className="dataTable__filtersWrapper">

              <ul className="dataTable__filtersContainer">
                <li className="dataTable__filter">
                  <span className="filterTitle">
                    <strong>Status:</strong> In Production
                  </span>
                  <a className="remove" href=""><span className="icon glyphicons-remove-2"></span></a>
                </li>
                <li className="dataTable__filter">
                  <span className="filterTitle">
                    <strong>Cylinders:</strong> 8+
                  </span>
                  <a className="remove" href=""><span className="icon glyphicons-remove-2"></span></a>
                </li>
                <li className="dataTable__filter">
                  <span className="filterTitle">
                    <strong>Passengers:</strong> 2+
                  </span>
                  <a className="remove" href="">
                    <span className="icon glyphicons-remove-2"></span>
                  </a>
                </li>
                <li className="dataTable__filter">
                  <span className="filterTitle">
                    <strong>Fuel Economy:</strong> 10mpg+
                  </span>
                  <a className="remove" href="">
                    <span className="icon glyphicons-remove-2"></span>
                  </a>
                </li>
                <li className="dataTable__filter">
                  <span className="filterTitle">
                    <strong>Fuel:</strong> Not Electric
                  </span>
                  <a className="remove" href="">
                    <span className="icon glyphicons-remove-2"></span>
                  </a>
                </li>

                <li className="dataTable__mask">
                  <span className="mask-inner"></span>
                </li>

                <li className="dataTable__ellipsis">
                  <span className="icon glyphicons-more"></span>
                  <a className="add" href="#">+</a>
                </li>

                <li className="dataTable__addFilter">
                  <a href="#">+</a>
                </li>

              </ul>
            </div>

            <div className="dataTable__batch">

              <a href="" className="dataTable__batch__button disabled">
                <span className="icon glyphicons-new-window"></span>Actions
              </a>

            </div>

            <div className="dataTable__search">

              <label className="dataTable__search__input">
                <input type="text" />
                <span className="icon glyphicons-search"></span>
              </label>

            </div>

          </div>

        </div>

        <div className="dataTable__tableControls__placeholder"></div>

        <div className="dataTable__container">

          <div className="dataTable__thead__placeholder">
            <div className="dataTable__thead__placeholder__liner"></div>
          </div>

          <div className="dataTable__table"x>
            <div className="dataTable__thead">
              <div className="dataTable__thead__row dataTable__thead__row--placeholder">
                <div className="dataTable__thead__cell">
                  <span className="dataTable__thead__cellLiner">
                    <span className="checkboxWrapper">
                      <input type="checkbox" name="table_batch" id="table_batch" className="checkbox__input" />
                      <label htmlFor="table_batch" className="checkbox__faux__input"></label>
                    </span>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Name
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Status
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Fuel
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Passengers
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Cylinders
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Fuel Economy
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable selected reverse">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      # Sold
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Registered
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell">
                  <span className="dataTable__thead__cellLiner"></span>
                </div>
              </div>
              <div className="dataTable__thead__row">
                <div className="dataTable__thead__cell">
                  <span className="dataTable__thead__cellLiner">
                    <span className="checkboxWrapper">
                      <input type="checkbox" name="table_batch" id="table_batch" className="checkbox__input" />
                      <label htmlFor="table_batch" className="checkbox__faux__input"></label>
                    </span>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Name
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Status
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Fuel
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Passengers
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Cylinders
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Fuel Economy
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable selected reverse">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      # Sold
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell sortable">
                  <span className="dataTable__thead__cellLiner">
                    <a>
                      Registered
                      <span className="arrowUp">
                        <span className="arrowUp__centerLine"></span>
                      </span>
                      <span className="arrowDown">
                        <span className="arrowDown__centerLine"></span>
                      </span>
                    </a>
                  </span>
                </div>
                <div className="dataTable__thead__cell">
                  <span className="dataTable__thead__cellLiner"></span>
                </div>
              </div>
            </div>
            <div className="dataTable__tbody">
              {rows}
            </div>
            <div className="dataTable__tfoot">
              <div className="dataTable__tfoot__row">
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner">152.1m</div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner">Registered</div></div>
                <div className="dataTable__tfoot__cell"><div className="dataTable__tfoot__cellLiner"></div></div>
              </div>
            </div>

          </div>

        </div>

      </Page>
    );
  }

}
