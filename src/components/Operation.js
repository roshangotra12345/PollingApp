import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {alllistRequest, alldeleteRequest} from '../Redux/actions';
import {deleteRequest} from '../Redux/actions';
import {voteRequest} from '../Redux/actions';
import Layout from './Layout';
import Layout1 from './Layout1';
import {useFocusEffect} from '@react-navigation/native';
const Operation = props => {
  console.log(props);
  // console.log(deleteOpration);
  const [newPoll, setNewPoll] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [idState, setidState] = useState('');
  const [goBack, SetGoBack] = useState('<<Go Back');
  const [edit, setEdit] = useState({
    id: '',
    title: '',
  });

  useEffect(() => {
    dispatch(alllistRequest());
  }, []);

  const deleteOperation = async id => {
    dispatch(alldeleteRequest(id));
    setTimeout(() => {
      dispatch(alllistRequest());
    }, 10);

    props.navigation.navigate('Question');
  };

  const deleteOpration = async (id, option) => {
    dispatch(deleteRequest({id, option}));
    setTimeout(() => {
      dispatch(alllistRequest());
    }, 10);
  };

  const handleModal = id => {
    setidState(id);
    setModalVisible(!modalVisible);
  };
  const handleModal1 = (title, id) => {
    setModalVisible1(!modalVisible1);
    setEdit({id: id, title: title});
  };
  const dispatch = useDispatch();
  const data = useSelector(state => state.AllList.data.data);

  useEffect(() => {
    const newPoll = data.filter(item => {
      return props?.route?.params === item._id;
    });

    setNewPoll(newPoll);
  }, [data]);

  console.log(data, '_________------------,,,,,,,,,,.,.,.,.,');

  // const createThreeButtonAlert = () =>
  //   Alert.alert('Voting', 'You Voted', [
  //     {
  //       text: 'Ask me later',
  //       onPress: () => console.log('Ask me later pressed'),
  //     },
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK'},
  //   ]);

  return (
    <ScrollView>
      {/* <View style={styles.view2}> */}
      <TouchableOpacity
        style={styles.appButtonContainer1}
        onPress={() => props.navigation.navigate('Question')}>
        <Text style={styles.appButtonText1}>{goBack}</Text>
      </TouchableOpacity>
      <View style={styles.view1}>
        {newPoll.map((item, index) => {
          return (
            <>
              <View key={index}>
                <View style={styles.one}>
                  <Text style={styles.title1}>{item.title}</Text>
                  <View>
                    <TouchableOpacity
                      style={styles.two}
                      onPress={() => {
                        deleteOperation(item._id);
                      }}>
                      <Icon name="trash" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.three}
                      onPress={() => handleModal1(item.title, item._id)}>
                      <Icon name="edit" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
                {item?.options.map((newItem, index, option) => {
                  return (
                    <>
                      <View style={styles.page} key={index}>
                        <TouchableHighlight
                          // onPress={createThreeButtonAlert}
                          activeOpacity={0.2}
                          underlayColor="#DDDDDD"
                          style={styles.option}>
                          <Text>{newItem.option}</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          style={styles.btn}
                          onPress={() => {
                            deleteOpration(item._id, newItem.option);
                          }}>
                          <Icon name="trash" size={20} color="white" />
                        </TouchableHighlight>
                      </View>
                    </>
                  );
                })}

                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={() => handleModal(item._id)}>
                  <Text style={styles.appButtonText}>Add New Option</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={() => props.navigation.navigate('AddPoll')}>
                  <Text style={styles.appButtonText}>Add New Poll</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        })}

        <Layout1
          modalVisible1={modalVisible1}
          setModalVisible1={setModalVisible1}
          edit={edit}
        />
        <Layout
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          idState={idState}
        />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default Operation;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    color: 'white',
    margin: 30,
    padding: 20,
    minHeight: 600,
    flex: 1,
    display: 'flex',
    marginTop: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  one: {
    color: 'white',
  },
  option: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#C2D5DF',
    color: 'white',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 10,
    fontSize: 20,
  },
  view2: {
    // flex: 1,
    // flexDirection: 'column',
    // marginTop: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  one: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#009688',
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    fontSize: 15,
    color: 'white',
  },
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title1: {
    backgroundColor: '#C2D5DF',
    width: '85%',
    minHeight: 150,
    margin: 2,
    fontSize: 30,
    borderRadius: 12,
    padding: 12,
  },
  two: {
    margin: 10,
    backgroundColor: '#009688',
    borderRadius: 10,
    padding: 8,
    marginLeft: 3,
    color: 'white',
  },
  three: {
    margin: 10,
    backgroundColor: '#009688',
    borderRadius: 10,
    padding: 8,
    marginLeft: 3,
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
  backbtn: {
    marginTop: 30,
  },
});
