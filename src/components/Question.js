import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {questions} from '../components/JsonData';

const Question = () => {
  return (
    <ScrollView>
      <View>
        {questions.map(item => (
          <>        
            <Text>{item.questionText}</Text>
          {
           item.answerOptions.map((option)=> 
           <Text>{option.answerText}</Text>) 
          }
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
  },
});
