import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// import Navbar from 'components/Navbar';

class App extends Component {
  static propTypes = {
    auth: PropTypes.shape().isRequired,
    component: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const LoggedInComponent = this.props.component;
    return (
      <div className="app">
        <Route
          render={(props) => {
            if (this.props.auth.isAuthenticated) {
              return (
                <Fragment>
                  {/* <Navbar key="navbar" {...props} /> */}
                  <LoggedInComponent {...props} key="application" />
                </Fragment>
              );
            }
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location },
                }}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
