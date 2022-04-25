import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {questions} from '../components/JsonData';
import {alllistRequest, deleteRequest,alldeleteRequest} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Operation from './Operation';
//import Icon from 'react-native-vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import Layout from './Layout';
//const Myicon = <Icon name="trash" size={30} color="#fff" />

const Question = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  useEffect(() => {
    dispatch(alllistRequest());
  }, []);

  const deleteOpration = async (id, option) => {
    dispatch(deleteRequest({id, option}));
    setTimeout(() => {
      dispatch(alllistRequest());
    }, 10);
  };
  const deleteOperation = async (id) => {
    dispatch(alldeleteRequest(id));
    setTimeout(() => {
      dispatch(alllistRequest());
    }, 10);
  };

  return (
    <ScrollView>
      <View>
        {data?.AllList?.data?.data?.map(item => (
          <>
              <TouchableOpacity onPress={() => navigation.navigate('Operation' , item._id,item)}>
            <View style={styles.view1}>
              <View style={styles.one}>
                <Text style={styles.question}>{item.title}</Text>
                <TouchableOpacity style={styles.two}
                      onPress={() => {
                        deleteOperation(item._id,);
                      }}>
                      <Icon name="trash" size={30} color="white" />
                    </TouchableOpacity> 
              </View>

              <View style={styles.mox}>
                {item.options.map(option => (
                  <Text style={styles.option}>
                     <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        deleteOpration(item._id, option.option);
                      }}>
                      <Icon name="trash" size={30} color="white" />
                    </TouchableOpacity> 
                    {option.option}
                  </Text>
                ))}
              </View>
            </View>
            </TouchableOpacity>
          </>
        ))}
      </View>
    </ScrollView>
  );
};

export default Question;

const styles = StyleSheet.create({
  Question: {
    // backgroundColor: 'grey',
    padding: 10,
    fontSize: 20,
    color:"white"
  },
  question: {
    padding: 10,
    margin: 12,
    color:"black",
    fontSize:30
  },
  view1: {
    flex: 1,
    backgroundColor:"#4FA64C",
    borderRadius:12,

    padding: 20,
    marginVertical: 20,
    margin: 10,
  },
  option: {
    display:"flex",
    justifyContent:"space-between",
    padding: 10,
    backgroundColor: 'black',
    margin: 20,
    color: 'white',
    borderRadius: 20,
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
  two:{
    marginLeft:34
  }
});
