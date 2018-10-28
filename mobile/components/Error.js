import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Error = (props) => {
  return (
      <Text style={styles.error}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  error: {
    backgroundColor: '#ff3860',
    color: '#fff',
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    marginBottom: 20
    // color: '#fff',
    // fontSize: 30,
    // fontWeight: '100',
    // fontFamily: 'sans-serif-light'
  },
});

export default Error;