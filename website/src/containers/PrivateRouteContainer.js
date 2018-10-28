import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRouteContainer extends React.Component {
  render() {
    
    const {
      isAuthenticated,
      component: MyComponent,
      computedMatch,
      ...props
    } = this.props

    return (
      <Route
        {...props}
        render={props => {
          return isAuthenticated
            ? (<MyComponent {...props} />)
            : (
            <Redirect to={{
              pathname: '/log-in',
              state: { from: props.location }
            }} />
          )
        }
      }
      />
    )
  }
}

const PrivateRoute = connect(state => ({
  isAuthenticated: state.connexion.accessToken != null
}), null, null, { pure: false })(PrivateRouteContainer)

export default PrivateRoute;