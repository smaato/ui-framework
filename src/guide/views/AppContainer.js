
import { connect } from 'react-redux';
import AppView from './AppView.jsx';

function mapStateToProps(state, ownProps) {
  return {
    routes: ownProps.routes,
  };
}

export default connect(mapStateToProps)(AppView);
