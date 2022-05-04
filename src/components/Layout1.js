import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {titleRequest, alllistRequest} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
const Layout1 = ({modalVisible1, setModalVisible1, edit}) => {
  // const [modalVisible1, setModalVisible1] = useState(false);
  const [UpdatedTitle, setUpdatedTitle] = useState('');
  const dispatch = useDispatch();

  const editOperation = async () => {
    dispatch(titleRequest({id: edit.id, title: UpdatedTitle}));
    setTimeout(() => {
      dispatch(alllistRequest());
    }, 10);

    setModalVisible1(!modalVisible1);
    alert('edit');
  };

  useEffect(() => {
    setUpdatedTitle(edit.title);
  }, [edit]);

  console.log(edit, UpdatedTitle);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible1(!modalVisible1);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* //value={edit} onChangeText={edit=>setEdit(edit)} */}
            <TextInput
              style={styles.textInput}
              value={UpdatedTitle}
              onChangeText={e => setUpdatedTitle(e)}
            />
            {/*             
            <Text style={styles.modalText}>Hello World!</Text> */}
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => setModalVisible1(!modalVisible1)}>
                <Text style={styles.appButtonText}>cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={editOperation}>
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
    padding: 5,
    width: 250,
    borderRadius: 10,
    margin: 10,
    height: 150,
    fontSize: 30,
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

export default Layout1;
