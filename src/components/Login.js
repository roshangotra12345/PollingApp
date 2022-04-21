import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <>
      <ImageBackground
        source={require('../Assessts/Ba.png')}
        style={styles.container}>
        <ImageBackground
          source={require('../Assessts/Rectangle.png')}
          style={styles.contain}>
          <ScrollView>
            <View>
              <View>
                <Text style={styles.text1}>Login</Text>
                <Text style={styles.text2}>Sign to Your Account</Text>
              </View>

              <View style={styles.email}>
                <Text style={styles.text3}>Your Email</Text>
                <TextInput style={styles.textInput} />
              </View>

              <View style={styles.email}>
                <Text style={styles.text3}>Password</Text>
                <TextInput style={styles.textInput} />
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>

              <Text style={styles.text3}>New User Click Here?</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>

       
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Question')}>
            
                <Text style={styles.butto}>Login</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 150,
  },
  contain: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  btton: {
    width: '100%',

    height: 80,
  },
  text: {
    color: 'white',
  },
  text1: {
    color: 'white',
    fontSize: 40,
    paddingLeft: 30,
    paddingTop: 10,
  },
  text2: {
    color: '#E5E5E5',
    marginLeft: 30,
    paddingTop: 10,
  },
  text3: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 10,
  },
  text4: {
    color: '#E5E5E5',
    marginLeft: 30,
    paddingTop: 10,
  },
  email: {
    marginTop: 20,
  },
  textInput: {
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#1A1E1E',
  },
  button:{
    
    backgroundColor:"#19A54A",
    height:80,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    alignItems:"center",
    fontSize:54,
    color:"white"

  },
  butto:{
   fontSize:24,
   color:"white"
  }
});
