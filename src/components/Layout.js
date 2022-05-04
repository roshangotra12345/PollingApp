import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {optionRequest, alllistRequest} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const Layout = ({modalVisible, setModalVisible, idState}) => {
  const [option, setOption] = useState('');

  //const [modalVisible , setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const optionOperation = async () => {
    //console.log(idState , option , "-----------> edit")
    if (option) {
      dispatch(optionRequest({id: idState, option: option}));
      setTimeout(() => {
        dispatch(alllistRequest());
      }, 10);
      setModalVisible(!modalVisible);
      setOption('');
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              value={option}
              onChangeText={option => setOption(option)}
            />
            {/*             
            <Text style={styles.modalText}>Hello World!</Text> */}
            <View style={styles.box}>
              {/* <Pressable
                style={styles.btn}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>cancel</Text>
              </Pressable> */}
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.appButtonText}>cancel</Text>
              </TouchableOpacity>

              {/* <Pressable
                style={styles.btn}
                // onPress={() => setModalVisible(!modalVisible)}
                onPress={optionOperation}>
                <Text style={styles.textStyle}>Done</Text>
              </Pressable> */}
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={optionOperation}>
                <Text style={styles.appButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
    marginLeft: 10,
  },
  modalText: {
    marginBottom: 15,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#C2D5DF',
    margin: 12,
    padding: 6,
    borderRadius: 12,
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 2,
    padding: 45,
    width: 250,
    borderRadius: 10,
    margin: 20,
    height: 150,
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
});

export default Layout;
