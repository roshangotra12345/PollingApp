import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {questions} from './JsonData'
import Question from './Question';

const Answer = () => {
    

  return (
    <View>
        {
      questions.map((item)=><Question item={item}/>)

        }
    </View>
  )
}

export default Answer

const styles = StyleSheet.create({})