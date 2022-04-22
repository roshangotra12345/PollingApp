import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {questions} from '../components/JsonData';
import {alllistRequest} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const Question = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  // console.log(data.AllList.data.data,"data aaa gya")

  useEffect(() => {
    dispatch(alllistRequest());
  }, []);
  return (
    <ScrollView>
      <View>
        {data?.AllList?.data?.data?.map(item => (
          <>
            <View style={styles.view1}>
              <Text style={styles.question}>{item.title}</Text>
              <Button title="press me" />
              {item.options.map(option => (
                <Text>
                  {' '}
                  <Button title="hlo" />
                  {option.option}
                </Text>
              ))}
            </View>
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
  },
  question: {
    padding: 10,
    margin: 12,
  },
  view1: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 20,
  },
});
