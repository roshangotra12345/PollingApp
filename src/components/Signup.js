import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {signupRequest} from '../Redux/actions';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [admin, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  //const [country, setCountry] = useState('Unknown');

  const handleClick = async () => {
    if (name.length > 3 && password.length > 3) {
      dispatch(
        signupRequest({
          username: name,
          password: password,
          role: admin,
        }),
        navigation.navigate('Login'),
        setName(''),
        setPassword(''),
        alert('Registered Successfull'),
      );
    } else {
      alert('Pleases fillYour Details');
    }
    // try {
    //   let response = await axios.get(
    //     `https://secure-refuge-14993.herokuapp.com/add_user?username=${name}&password=${password}&role=admin`,
    //   );
    //   let item = {name, email, password};
    //   console.log(item, '------------------------');

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
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
                <Text style={styles.text1}>Register</Text>
                <Text style={styles.text2}>Create Your Account</Text>
              </View>
              <View style={styles.email}>
                <Text style={styles.text3}>Your Name</Text>
                <TextInput
                  style={styles.textInput}
                  value={name}
                  onChangeText={name => setName(name)}
                />
              </View>

              <View style={styles.email}>
                <Text style={styles.text3}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={password => setPassword(password)}
                />

                {/* <View style={styles.email}>
                  <Text style={styles.text3}>Your Role</Text>
                  <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={email => setEmail(email)}
                  />
                </View> */}

                <View>
                  <Picker
                    selectedValue={admin}
                    onValueChange={(value, index) => setAdmin(value)}
                    mode="dropdown" // Android only
                    style={styles.Input}>
                    <Picker.Item
                      style={styles.Input}
                      label="Please select your Role"
                      value="Unknown"
                    />
                    <Picker.Item label="user" value="user" />
                    <Picker.Item label="admin" value="admin" />
                  </Picker>
                </View>

                <TouchableOpacity
                  style={styles.text2}
                  onPress={() => navigation.goBack()}>
                  <Text style={styles.text2}>Go To Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.butto}>Register</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </>
  );
};

export default Signup;

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
    // flex:1,
    width: '100%',
    // alignItems:"flex-end",
    height: 80,
    // alignSelf:"flex-end"
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
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#1A1E1E',
    color: 'white',
  },
  button: {
    backgroundColor: '#19A54A',
    height: 60,
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
  Input: {
    padding: 5,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,

    backgroundColor: '#1A1E1E',
    color: 'white',
  },
});
