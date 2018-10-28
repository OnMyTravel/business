import React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Link } from 'react-router-native'

import Error from './Error'
import FacebookLogin from './FacebookLogin'

const Login = ({ startConnexion, isLogging, hasLoggingFailed = false } = {}) => {
  return (
    <ImageBackground
      source={require('../assets/plan-our-trip-resized.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >

        <View style={styles.panel}>
          <Text style={styles.title}>Login</Text>

          {hasLoggingFailed &&
            <Error>An error occured while creating an account</Error>
          }
          
          <Text>Because we want to help you to share your most magical moments with as many friends and relatives
             as possibles, we started building OnMyTravel using the most popular social media.</Text>

          <FacebookLogin action={startConnexion} />

          <Text style={styles.legalMention}>
            Les informations recueillies sur ce formulaire sont enregistrées dans 
            un fichier informatisé par OnMyTravel pour permettre l'accès au service offert par OnMyTravel. Elles 
            sont conservées pendant la durée d'utilisation du service et sont destinées à OnMyTravel exclusivement.
            Elles ne sont pas communiquées à des tiers.
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    padding: 20
  },
  legalMention: {
    color: '#888',
    fontSize: 15
  },
  gradient: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: '100',
    fontFamily: 'sans-serif-light'
  },
});

export default Login;