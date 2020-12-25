import React, { Component } from 'react';
import QuestionItem from './QuestionItem'

class QuestionList extends Component {
 
    render() { 
        console.log(this.props)
        const {questions} = this.props
        return (
            <>
            {questions && questions.map(question => (
                <QuestionItem key={question.id} question={question}/>
            ))}
            </>
        )
    }
}
 
export default QuestionList;