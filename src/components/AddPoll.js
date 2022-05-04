import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addPollRequest} from '../Redux/actions';
import {NavigationContainer} from '@react-navigation/native';

const AddPoll = ({navigation}) => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [goBack, SetGoBack] = useState('<<Go Back');

  //const [country, setCountry] = useState('Unknown');

  const handleClick = () => {
    if (
      question.length >= 1 &&
      option1.length >= 1 &&
      option2.length >= 1 &&
      option3.length >= 1 &&
      option4.length >= 1
    ) {
      dispatch(
        addPollRequest({
          // username: name,
          // password: password,
          // role: admin,
          question: question,
          option1: option1,
          option2: option2,
          option3: option3,
          option4: option4,
        }),
        setQuestion(' '),
        setOption1(' '),
        setOption2(' '),
        setOption3(' '),
        setOption4(' '),
        alert('Poll Created Successful'),
        navigation.navigate('Question'),
      );
    } else {
      alert('fill your details');
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.appButtonContainer1}
        onPress={() => navigation.navigate('Operation')}>
        <Text style={styles.appButtonText1}>{goBack}</Text>
      </TouchableOpacity>
      <View style={styles.font}>
        <ScrollView>
          <View style={styles.page}>
            <TextInput
              style={[styles.TextInput, styles.question1]}
              value={question}
              onChangeText={text => {
                setQuestion(text);
              }}
              placeholder="Enter Your Question"
            />
            <TextInput
              style={styles.TextInput}
              value={option1}
              onChangeText={text => {
                setOption1(text);
              }}
              placeholder="Option1"
            />
            <TextInput
              style={styles.TextInput}
              value={option2}
              placeholder="Option2"
              onChangeText={text => {
                setOption2(text);
              }}
            />
            <TextInput
              style={styles.TextInput}
              value={option3}
              placeholder="Option3"
              onChangeText={text => {
                setOption3(text);
              }}
            />
            <TextInput
              style={styles.TextInput}
              value={option4}
              placeholder="Option4"
              onChangeText={text => {
                setOption4(text);
              }}
            />
            <View>
              <View style={styles.last}>
                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={handleClick}>
                  <Text style={styles.appButtonText}>Add Poll</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddPoll;

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#C2D5DF',
    padding: 12,
    margin: 20,
    color: 'black',
    fontSize: 20,
    width: '95%',
    borderRadius: 10,
  },
  question1: {
    minHeight: 100,
    fontSize: 35,
  },
  page: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  font: {
    marginTop: 50,
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 10,
  },
  last: {
    display: 'flex',
    flexDirection: 'row',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 2,
    margin: 5,
    width: '30%',
    marginTop: 20,
  },
  appButtonText1: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',

    textTransform: 'uppercase',
  },
});
