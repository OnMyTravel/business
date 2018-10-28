import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = (props) => {
  return (
      <Text style={styles.title}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '100',
    fontFamily: 'sans-serif-light'
  },
});

export default Title;