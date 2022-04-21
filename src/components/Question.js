import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

const Question = () => {
    const questions = [
		{
			questionText: '1. What of the following is used in React.js to increase performance?',
			answerOptions: [
				{ answerText: 'Original DOM', isCorrect: false },
				{ answerText: 'Virtual DOM', isCorrect: true },
				{ answerText: 'Both A and B.', isCorrect: false },
				{ answerText: 'None of the above.', isCorrect: false },
			],
		},
		{
			questionText: '2. How many numbers of elements a valid react component can return?',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '2', isCorrect: false},
				{ answerText: '3', isCorrect: false },
				{ answerText: '5', isCorrect: false },
			],
		},
		{
			questionText: '3. Which of the following option is correct in the case of the Babel?',
			answerOptions: [
				{ answerText: 'Babel is a Compiler.', isCorrect: false },
				{ answerText: 'Babel is a Transpilar.', isCorrect: false },
				{ answerText: 'None of the above.', isCorrect: false },
				{ answerText: 'Both A and B are correct.', isCorrect: true },
			],
		},
		{
            questionText: ' What of the following is used in React.js to increase performance?',
			answerOptions: [
				{ answerText: 'Original DOM', isCorrect: false },
				{ answerText: 'Virtual DOM', isCorrect: true },
				{ answerText: 'Both A and B.', isCorrect: false },
				{ answerText: 'None of the above.', isCorrect: false },
			],
		},
        {
			questionText: ' How many numbers of elements a valid react component can return?',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '2', isCorrect: false},
				{ answerText: '3', isCorrect: false },
				{ answerText: '5', isCorrect: false },
			],
		}
	];


  return (
      <ScrollView>
    <View>
      {
          questions.map((item)=>
          
          <View>
            <Text style={styles.Question}>{item.questionText}</Text>
            {
            item.answerOptions.map((answer)=>
            <Text>{answer.answerText}</Text>
            )
}
          </View>

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