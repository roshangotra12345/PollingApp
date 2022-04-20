import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Main = () => {
  return (
    <>
      <ImageBackground
        source={require('../Assessts/Ba.png')}
        style={styles.container}>
        <TouchableOpacity style={styles.logoContainer}>
          <Text style={styles.logoText}>Polling App</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View>
        <ImageBackground
          source={require('../Assessts/rok.png')}
          style={styles.rectangle}>
          <TouchableOpacity style={styles.logoContainer}>
            <Text style={styles.logo}>Sign In Your Account</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.9,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  logoText: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  rectangle: {
    width: '100%',
    bottom: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  logo: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
