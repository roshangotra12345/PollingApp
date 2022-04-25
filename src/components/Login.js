import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '../Redux/actions';
import login from '../Redux/reducer/login';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const data = useSelector(state => state && state.login && state.login.data);

  // useEffect(() => {
  //   const handlCheck = () => {
  //     if (data?.error == 'user not exists') {
  //       navigation.navigate('Signup');
  //     } else {
  //       navigation.navigate('Question');
  //     }
  //   };
  //   handlCheck();
  // }, [data]);

  const onHandleClick = async () => {
    if (name.length > 3 && password.length > 4) {
      dispatch(
        loginRequest({
          username: name,
          password: password,
          navigation:navigation
        }),
      );
    } else {
      alert('Please fill Your Details');
    }
    // try {
    //   let response = await axios.get(
    //     `https://secure-refuge-14993.herokuapp.com/login?username=${name}&password=${password}`,
    //   );
    //   let item = {name, password};

    // } catch (error) {
    // }
  };

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
                <Text style={styles.text3}>Your Name</Text>
                <TextInput
                  onChangeText={name => setName(name)}
                  style={styles.textInput}
                />
              </View>

              <View style={styles.email}>
                <Text style={styles.text3}>Password</Text>
                <TextInput
                  onChangeText={password => setPassword(password)}
                  secureTextEntry={true}
                  style={styles.textInput}
                />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text3}>New User Click Here?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* onPress={() => navigation.navigate('Question')} */}
          <TouchableOpacity style={styles.button} onPress={onHandleClick}>
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

    height: 60,
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
    color: 'white',
  },
  button: {
    backgroundColor: '#19A54A',
    height: 80,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 54,
    color: 'white',
  },
  butto: {
    fontSize: 24,
    color: 'white',
  },
});
