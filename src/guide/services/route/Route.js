
// Components
import CheckBoxExample from '../../views/checkBox/CheckBoxExample.jsx';
import GridExample from '../../views/grid/GridExample.jsx';
import IconExample from '../../views/icon/IconExample.jsx';
import SpinnerExample from '../../views/spinner/SpinnerExample.jsx';
import TitleBarExample from '../../views/titleBar/TitleBarExample.jsx';

// Integrations
import GridViewExample from '../../views/gridView/GridViewExample.jsx';

export default {

  components: [{
    path: 'checkBox',
    component: CheckBoxExample,
  }, {
    path: 'grid',
    component: GridExample,
  }, {
    path: 'icon',
    component: IconExample,
  }, {
    path: 'spinner',
    component: SpinnerExample,
  }, {
    path: 'titleBar',
    component: TitleBarExample,
  }],

  integrations: [{
    path: 'gridView',
    component: GridViewExample,
  }],

  getList: function getList() {
    return this.components.concat(this.integrations);
  },

};
