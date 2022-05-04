import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {voteRequest} from '../Redux/actions';
import {
  alllistRequest,
  deleteRequest,
  alldeleteRequest,
} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const Question = ({navigation}) => {
  const [first, setFirst] = useState(false);
  const [token, setToken] = useState(' ');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  console.log(data, 'data aa raha hai akya');

  useEffect(() => {
    dispatch(alllistRequest());
  }, []);

  // const setToken = async token => {
  //   try {
  //     await AsyncStorage.setItem('token', token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   const getData = async () => {
  //     storeData(token);
  //     try {
  //       const value = await AsyncStorage.getItem('token');
  //       if (value !== null) {
  //         // value previously stored
  //         navigation.navigate('login');
  //       }
  //     } catch (e) {
  //       // error reading value
  //       console.log(e);
  //     }
  //   };
  //   getData();
  // }, []);

  console.log(token, '-----------> token');

  //

  // const selectedOperation = (option,index,id) => {
  //   console.log(option, "-----------------")
  //   console.log(id);
  //   console.log(index);
  //  // if(option==option){
  //     setFirst(true);
  //}
  // const element = item?.option?.filter((elem, ind) => {
  //   return ind != index;
  // });
  //console.log(data?.AllList?.data?.data.options);
  // console.log(item?.options.indexOf(item.options.option));
  // console.log(item?.options);
  // console.log(index);
  // item.options.forEach(ft => {
  //   if (item.options.indexOf(ft) === index) {
  //     // console.log(ft, 'ughjoipklpoihuyfguhjio');
  //
  //   }
  //   console.log(item.options.indexOf(ft));

  //setFirst(true);

  // };
  // const SubmitPoll = () => {
  //   setFirst(true);
  // };

  const SubmitPoll = id => {
    console.log(id._id, first.option, 'id  aa raha hai kya');

    dispatch(voteRequest({id: id._id, option: first.option}));
    /////dispatch(alllistRequest());
    setFirst(true);
  };
  const clearData = () => {
    //clear([]: ?(error: ?Error) => void)
    AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };
  const hlo = () => {
    console.log('hlo');
  };
  //console.log(item, 'ty94tut4t4');
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.all}>All Polls</Text>
          <TouchableOpacity
            onPress={() => clearData()}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {data?.AllList?.data?.data?.map((item, index) => (
          <>
            {/* <TouchableOpacity key={index}> */}
            <View key={index} style={styles.view1}>
              <View style={styles.one}>
                <ScrollView style={styles.question}>
                  <Text style={styles.question2}>{item.title}</Text>
                </ScrollView>
              </View>

              <View style={styles.mox}>
                {item.options.map((option, index) => (
                  <TouchableOpacity
                    style={first == option ? styles.btn : styles.option}
                    onPress={() => setFirst(option)}>
                    <Text>{option.option}</Text>
                  </TouchableOpacity>
                ))}
                {data?.login?.data?.decoded?.role == 'admin' && (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Operation', item._id, item)
                    }
                    style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Go To Edit</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  onPress={() => SubmitPoll(item)}
                  style={styles.appButtonContainer}>
                  <Text style={styles.appButtonText}>Submit Poll</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* </TouchableOpacity> */}
          </>
        ))}
      </View>
    </ScrollView>
  );
};

export default Question;

const styles = StyleSheet.create({
  Question: {
    backgroundColor: 'grey',
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  question: {
    backgroundColor: '#C2D5DF',
    padding: 10,
    margin: 12,
    color: 'white',
    fontSize: 30,
    width: '95%',
    borderRadius: 10,
    minHeight: 150,
  },
  question2: {
    fontSize: 30,
  },
  view1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    minHeight: 600,
    padding: 10,

    margin: 30,
  },
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#C2D5DF',
    margin: 15,
    color: 'white',
    borderRadius: 5,
    fontSize: 20,
    fontFamily: 'bold',
  },
  icon: {
    flex: 1,
  },
  btn: {
    color: 'white',
    marginRight: 123,

    flex: 1,
    flexDirection: 'row',
  },
  one: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  two: {
    marginLeft: 34,
  },
  Button: {
    fontSize: 20,
    backgroundColor: '#C2D5DF',
    margin: 12,
    padding: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#34568B',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 15,
    margin: 15,
    color: 'white',
    textDecorationColor: 'white',
    borderRadius: 5,
    fontSize: 20,
    fontFamily: 'bold',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20,
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
  all: {
    fontSize: 20,
    marginTop: 20,
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
