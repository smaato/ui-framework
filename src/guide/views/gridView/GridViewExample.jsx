
import React, {
  Component,
} from 'react';
import $ from 'jquery';

import Page from '../../components/page/Page.jsx';

import {
  Entity,
} from '../../../framework/framework.js';

export default class GridViewExample extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Add scroll handler when we view this page.
    const $window = $(window);
    const $body = $('body');
    $window.scroll(() => {
      const scrollTop = $window.scrollTop();
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
    for (let i = 0; i < 100; i++) {
      rows.push(
        <div className="grid__body__row" key={i}>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <span className="checkboxWrapper">
                <input type="checkbox" name="item_1" id="item_1" className="checkbox__input" />
                <label htmlFor="item_1" className="checkbox__faux__input"></label>
              </span>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <a href="#" className="grid__body__cellValue--link blueLink">Ford F150</a>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <a href="#" className="grid__body__cellValue--editable">In Production</a>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <a href="#" className="grid__body__cellValue--editable">Diesel, Unleaded</a>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <a href="#" className="grid__body__cellValue--editable">
                <span className="icon glyphicons-user"></span>3, 5, 6</a>
              </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <a href="#" className="grid__body__cellValue--editable">6, 8</a>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <a href="#" className="grid__body__cellValue--editable">25mpg<span className="icon glyphicons-leaf"></span></a>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <span className="grid__body__cellValue--readOnly">202.1k<span className="gridKpi gridKpi--positive">+2%</span></span>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <span className="grid__body__cellValue--readOnly">200.5k<span className="gridKpi gridKpi--negative">-2%</span></span>
            </span>
          </div>
          <div className="grid__body__cell">
            <span className="grid__body__cellLiner">
              <a href="" className="icon glyphicons-more"></a>
              <a href="" className="icon glyphicons-cogwheel"></a>
            </span>
          </div>
        </div>
      );
    }

    return (
      <Page isFullScreen>

        <div className="appHeader">
          <div className="appHeader__liner">
            <a className="appLogo" title="Smaato" href="#">
              Smaato
            </a>
            <nav className="appNav">
              <a href="#" className="appNav__link is-app-nav-link-selected ">
                Transportation
              </a>
              <a href="#" className="appNav__link">
                Camping
              </a>
              <a href="#" className="appNav__link">
                Storage
              </a>
              <a href="#" className="appNav__link">
                Misc
              </a>
            </nav>
            <a className="accountNav">
              <span className="accountPicture">
                <span className="icon glyphicons-user accountPicture__icon"></span>
              </span>
              <span className="accountNav__email">
                han.solo@smaato.com
              </span>
              <span className="accountDropdownArrow"></span>
            </a>
          </div>
        </div>

        <div className="viewHeader">

          <div className="viewHeader__liner">

            <nav className="viewHeaderNav">
              <a href="#" className="viewHeaderNav__link is-view-header-nav-link-selected">
                <span>
                  <span className="icon glyphicons-car viewHeaderNav__link__icon" />
                  Automobile
                </span>
              </a>
              <a href="#" className="viewHeaderNav__link">
                <span>
                  <span className="icon glyphicons-train viewHeaderNav__link__icon" />
                  Train
                </span>
              </a>
              <a href="#" className="viewHeaderNav__link">
                <span>
                  <span className="icon glyphicons-airplane viewHeaderNav__link__icon" />
                  Airplane
                </span>
              </a>
              <a href="#" className="viewHeaderNav__link">
                <span>
                  <span className="icon glyphicons-bicycle viewHeaderNav__link__icon" />
                  Bicycle
                </span>
              </a>
              <a href="#" className="viewHeaderNav__link">
                <span>
                  <span className="icon glyphicons-person-walking viewHeaderNav__link__icon" />
                  Walking
                </span>
              </a>
              <a href="#" className="viewHeaderNav__link">
                <span className="viewHeaderNav__ellipsis">
                  <span className="icon glyphicons-more"></span>
                </span>
              </a>
            </nav>

            <div className="dateRange">
              <div className="dateRange__option dateRange__option--required">
                <a className="dateRange__trigger">
                  <span className="icon glyphicons-calendar dateRange__triggerIcon"></span>
                  Jul 18-Jul 28
                </a>
              </div>
              <div className="dateRange__option">
                <label className="dateRange__compareToggle">
                  <input className="dateRange__input" type="checkbox" />
                  Compare
                </label>
              </div>
              <div className="dateRange__option">
                <span className="dateRange__goTo">
                  <a className="dateRange__prev" href="">
                    <span className="dateRange__prevArrow"></span>
                  </a>
                  <a className="dateRange__next" href="">
                    <span className="dateRange__nextArrow"></span>
                  </a>
                  <span className="clear"></span>
                </span>
              </div>
            </div>

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

        <div className="grid__controls">
          <div className="grid__controls__liner">
            <div className="filters">
              <div className="addedFilter">
                <span className="addedFilter__text">
                  <strong className="addedFilter__name">Status:</strong>
                  {Entity.nbsp}
                  In Production
                </span>
                <span className="icon glyphicons-remove-2 removeFilterButton"/>
              </div>
              <div className="addedFilter">
                <span className="addedFilter__text">
                  <strong className="addedFilter__name">Cylinders:</strong>
                  {Entity.nbsp}
                  8+
                </span>
                <span className="icon glyphicons-remove-2 removeFilterButton"/>
              </div>
              <div className="addedFilter">
                <span className="addedFilter__text">
                  <strong className="addedFilter__name">Passengers:</strong>
                  {Entity.nbsp}
                  2+
                </span>
                <span className="icon glyphicons-remove-2 removeFilterButton"/>
              </div>
              <div className="addedFilter">
                <span className="addedFilter__text">
                  <strong className="addedFilter__name">Fuel Economy:</strong>
                  {Entity.nbsp}
                  10mpg+
                </span>
                <span className="icon glyphicons-remove-2 removeFilterButton"/>
              </div>
              <div className="addedFilter">
                <span className="addedFilter__text">
                  <strong className="addedFilter__name">Fuel:</strong>
                  {Entity.nbsp}
                  Not Electric
                </span>
                <span className="icon glyphicons-remove-2 removeFilterButton"/>
              </div>
              <div className="toggleFilterDropdownButton">+</div>
              <div className="filterEllipsis">
                <div className="icon glyphicons-more"></div>
              </div>
            </div>
            <div className="grid__batch">
              <a href="" className="grid__batch__button disabled">
                <span className="icon glyphicons-new-window"/>
                Actions
              </a>
            </div>
            <label className="gridSearch">
              <input type="text" className="gridSearch__input"/>
              <span className="icon glyphicons-search gridSearch__icon"/>
            </label>
          </div>

        </div>

        <div className="grid__controls__placeholder"></div>

        <div className="grid__container">

          <div className="grid__header__placeholder">
            <div className="grid__header__placeholder__liner"></div>
          </div>

          <div className="grid__table"x>
            <div className="grid__header">
              <div className="grid__header__row grid__header__row--placeholder">
                <div className="grid__header__cell">
                  <span className="grid__header__cellLiner">
                    <span className="checkboxWrapper">
                      <input type="checkbox" name="table_batch" id="table_batch" className="checkbox__input" />
                      <label htmlFor="table_batch" className="checkbox__faux__input"></label>
                    </span>
                  </span>
                </div>
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable selected reverse">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell">
                  <span className="grid__header__cellLiner"></span>
                </div>
              </div>
              <div className="grid__header__row">
                <div className="grid__header__cell">
                  <span className="grid__header__cellLiner">
                    <span className="checkboxWrapper">
                      <input type="checkbox" name="table_batch" id="table_batch" className="checkbox__input" />
                      <label htmlFor="table_batch" className="checkbox__faux__input"></label>
                    </span>
                  </span>
                </div>
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable selected reverse">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell sortable">
                  <span className="grid__header__cellLiner">
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
                <div className="grid__header__cell">
                  <span className="grid__header__cellLiner"></span>
                </div>
              </div>
            </div>
            <div className="grid__body">
              {rows}
            </div>
            <div className="grid__footer">
              <div className="grid__footer__row">
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner">152.1m</div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner">Registered</div></div>
                <div className="grid__footer__cell"><div className="grid__footer__cellLiner"></div></div>
              </div>
            </div>

          </div>

        </div>

      </Page>
    );
  }

}
