import React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo';

import { Link } from 'react-router-native'

import Title from './Title'

const Landing = ({ } = {}) => {
  return (
    <ImageBackground
      source={require('../assets/plan-our-trip-resized.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <View style={styles.title}>
          <Title>On My Travel</Title>
          <Text style={styles.white}>A new way to share your travel experiences.</Text>
        </View>

        <View style={styles.login}>
          <Link to="/login">
            <Text style={styles.link}>SE CONNECTER</Text>
          </Link>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    // justifyContent: 'center',
  },
  white: {
    color: '#fff',
    fontSize: 40,
  },
  title: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  login: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 40
  },
  link: {
    textAlign: 'center',
    color: '#fff'
  }
});

export default Landing;
