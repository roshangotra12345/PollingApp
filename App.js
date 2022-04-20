import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Main from './src/components/Main';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden={true} translucent={true}/> */}

      <Signup />
      {/* <Login/>    */}
      {/* <Main/>  */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
