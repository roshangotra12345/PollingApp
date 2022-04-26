import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TextInput } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
const Layout1 = ({modalVisible1,setModalVisible1}) => {
  //const [modalVisible1 , setModalVisible1] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.textInput} />
{/*             
            <Text style={styles.modalText}>Hello World!</Text> */}
            <View style={styles.box}>
            <Pressable
              style={styles.btn}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>cancel</Text>
            </Pressable>

            <Pressable
              style={styles.btn}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    padding:5,
    marginLeft:10

  },
  modalText: {
    marginBottom: 15,

  },
  box:{
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn:{
  backgroundColor:"black",
  margin:12,
  padding:6,
  borderRadius:12
  },
  textInput:{
    borderColor:"grey",
    borderWidth:2,
    width:200,
    borderRadius:10,
    margin:20

  }
});

export default Layout1;