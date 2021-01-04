import React, { Component } from 'react';
import QuestionItem from './QuestionItem'
import PropTypes from 'prop-types';

class QuestionList extends Component {
    render() { 
        const {questions, handleClick, typeOfQuestion} = this.props
        return (
            <>
            {questions && questions.map(question => (
                <QuestionItem 
                    key={question.id} 
                    question={question} 
                    handleClick={handleClick}
                    typeOfQuestion={typeOfQuestion}
                />
            ))}
            </>
        )
    }
}


QuestionList.propTypes = {
    questions: PropTypes.array.isRequired,
    handleClick:PropTypes.func,
    typeOfQuestion: PropTypes.string
 };
 
export default QuestionList;