import 'react-native-gesture-handler';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/components/Navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <SafeAreaView style={styles.container}>
        <MyStack />
      </SafeAreaView>
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3591F4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
