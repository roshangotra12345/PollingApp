import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../Login'
import Signup from '../Signup'
import Main from '../Main';
import Question from '../Question';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Question" component={Question} />
      
    </Stack.Navigator>
  );
}
export default MyStack