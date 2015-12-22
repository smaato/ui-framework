
import { connect } from 'react-redux';
import AppView from './AppView.jsx';

function mapStateToProps(state) {
  return {
    routerState: state.router,
  };
}

export default connect(mapStateToProps)(AppView);
