import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Button, TouchableHighlight } from 'react-native';

const FacebookLogin = ({ action }) => {
  return (
      <TouchableHighlight onPress={action} underlayColor='transparent'>
        <Text style={styles.title} onClick={action}>Connect with Facebook</Text>
      </TouchableHighlight>
  );
}

FacebookLogin.propTypes = {
  action: PropTypes.func
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    padding: 20,
    backgroundColor: '#3273dc',
    color: 'white',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center'
  },
});

export default FacebookLogin;