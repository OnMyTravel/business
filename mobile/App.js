import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { NativeRouter, Route, Switch } from 'react-router-native'

import LoginPage from './containers/LoginPage';
import LandingPage from './containers/LandingPage';

import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
