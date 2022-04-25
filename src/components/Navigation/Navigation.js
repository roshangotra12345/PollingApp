import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Login from '../Login';
import Signup from '../Signup';
import Main from '../Main';
import Question from '../Question';
import Operation from '../Operation';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}
        <Stack.Screen name="Question" component={Question} />
        {/* <Stack.Screen name="Question" component={Question} /> */}
       <Stack.Screen name="Operation" component={Operation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;

// export function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="home" component={Question} />
//       <Drawer.Screen name="Main" component={Main} />
//     </Drawer.Navigator>
//   );
// }
