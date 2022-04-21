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
import React, {useState} from 'react';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // function handleClick() {
  //    let item = {name,email,Password}
  //    console.log(item,"------------------------")

  //   }

  const handleClick = async () => {
    try {
      let response = await axios.get(
        `https://secure-refuge-14993.herokuapp.com/add_user?username=${name}&password=${password}&role=admin`,
      );
      let item = {name, email, password};
      console.log(item, '------------------------');

      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
                <Text style={styles.text3}>Your NAME</Text>
                <TextInput
                  style={styles.textInput}
                  value={name}
                  onChangeText={name => setName(name)}
                />
              </View>

              <View style={styles.email}>
                <Text style={styles.text3}>Your Email</Text>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={email => setEmail(email)}
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
});
