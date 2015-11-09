
import { slugifyEach } from '../string/Slug';

// Components
import CheckBoxExample from '../../views/checkBox/CheckBoxExample.jsx';
import GridExample from '../../views/grid/GridExample.jsx';
import GridKpiExample from '../../views/gridKpi/GridKpiExample.jsx';
import IconExample from '../../views/icon/IconExample.jsx';
import SpinnerExample from '../../views/spinner/SpinnerExample.jsx';
import TitleBarExample from '../../views/titleBar/TitleBarExample.jsx';

// Integrations
import GridViewExample from '../../views/gridView/GridViewExample.jsx';

// Component route names should match the component name exacty.
const components = [{
  name: 'CheckBox',
  component: CheckBoxExample,
}, {
  name: 'Grid',
  component: GridExample,
}, {
  name: 'GridKpi',
  component: GridKpiExample,
}, {
  name: 'Icon',
  component: IconExample,
}, {
  name: 'Spinner',
  component: SpinnerExample,
}, {
  name: 'TitleBar',
  component: TitleBarExample,
}];

// Integration names should be descriptive and utilize spaces.
const integrations = [{
  name: 'Grid View',
  component: GridViewExample,
}];

// Protoypes should point to HTML files and can be named whatever you want.
const prototypes = [{
  name: 'Grid View',
  href: '/prototype/gridView/gridView.html',
}];

export default {
  components: slugifyEach(components, 'name', 'path'),
  integrations: slugifyEach(integrations, 'name', 'path'),
  prototypes: prototypes.slice(),
  getAppRoutes: function getAppRoutes() {
    const list = this.components.concat(this.integrations);
    return list;
  },
};
