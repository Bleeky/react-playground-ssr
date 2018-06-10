import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';

import { Login } from 'modules/Auth';
import Modal from 'components/Modal';
import HomeRouter from 'routes/HomeRouter';
import AppContainer from './AppContainer';
import NotFound from './NotFound';
import appHistory from './appHistory';

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Router key="router" history={appHistory}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <AppContainer path="/" component={HomeRouter} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Modal key="modal" />
      <ReduxToastr
        timeOut={6000}
        newestOnTop={false}
        position="bottom-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </Fragment>
  </Provider>
);

AppRouter.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default AppRouter;
