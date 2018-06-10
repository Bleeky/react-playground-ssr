import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
