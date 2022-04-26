import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Layout from './Layout';
import Layout1 from './Layout1';
const Operation = props => {
  const [newPoll, setNewPoll] = useState([]);
  const [modalVisible , setModalVisible] = useState(false);
  const [modalVisible1 , setModalVisible1] = useState(false);
  const [idState , setidState] = useState("")
  
  const handleModal = (id) =>{
    setidState(id)
  setModalVisible(!modalVisible);
  } 
  const handleModal1 = () =>{
    setModalVisible1(!modalVisible1);
    } 
  const dispatch = useDispatch();
  const data = useSelector(state => state.AllList.data.data);

  useEffect(() => {
    const newPoll = data.filter(item => {
      return props.route.params === item._id;
    });

    setNewPoll(newPoll);
  }, []);

  console.log(idState);

  return (
    <View style={styles.view1}>
      {newPoll.map(item => {
        return (
          <>
            <View >
              <View style={styles.one}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={handleModal1 }>
                  <Icon name="edit" size={30} color="white" />
                </TouchableOpacity>
              </View>
              {item?.options.map(newItem => {
                return <Text style={styles.option}>{newItem.option}</Text>;
              })}
                <TouchableOpacity onPress={()=>handleModal(item._id)}>
                  <Text style={styles.btn}>Add New Option</Text>
                </TouchableOpacity>
            </View>

            
          </>
        );
      })}




              
            
          
                <TouchableOpacity>
                  <Text style={styles.btn}>Submit Your poll</Text>
                </TouchableOpacity>
               <Layout modalVisible={modalVisible} setModalVisible={setModalVisible} idState={idState} /> 
               <Layout1 modalVisible1={modalVisible1} setModalVisible1={setModalVisible1}/>
          
            

    </View>
  );
};

export default Operation;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: '#4FA64C',
    borderRadius: 12,
    color: 'white',
    padding: 20,
    marginVertical: 20,
    margin: 10,
  },
  one: {
    color: 'white',
  },
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'black',
    margin: 20,
    color: 'white',
    borderRadius: 20,
  },
  one: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
 btn:{
backgroundColor:"#0F6DFC",
padding:10,
margin:12,
display:"flex",
justifyContent:"center"

 }
 
});
