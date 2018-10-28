import React from 'react';
import {
  Route,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import PropTypes from 'prop-types';

import PrivateRoute from './containers/PrivateRouteContainer'

import Loading from './components/Loading';
import ProfilePage from './containers/ProfilePage';
import LoginPage from './containers/LoginPage';
import OfflinePage from './containers/OfflinePage';
import ChartePage from './containers/ChartePage';
import Homepage from './containers/Homepage';
import TripDetailsPage from './containers/TripDetailsPage';

const AppRouter = ({ store, history, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ConnectedRouter history={history}>
          <div id="router">
            <Route exact path="/" component={OfflinePage} />
            <Route exact path="/log-in" component={LoginPage} />
            <Route exact path="/charte" component={ChartePage} />
            <Route exact path="/map" component={Homepage} />
            <Route exact path="/voyage/:id" component={TripDetailsPage} />
            <PrivateRoute exact path="/profile" component={ProfilePage} />
          </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

AppRouter.propTypes = {
  store: PropTypes.object.isRequired
}

export default AppRouter;
