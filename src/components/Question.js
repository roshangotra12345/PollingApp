import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import {questions} from '../components/JsonData'



const Question = () => {
    // console.log(questions , "--------------->")
    // console.log(item.questionText,'rtg5yh6u6yg5t')
  return (
      <ScrollView>
    <View>
    {
      questions.map((item)=>
      <Text>{item.questionText}</Text>
      )
      }
        
    </View>
    </ScrollView>
  )
}

export default Question

const styles = StyleSheet.create({
    Question:{
        backgroundColor:"grey",
        padding:10,
        fontSize:20
    }
})