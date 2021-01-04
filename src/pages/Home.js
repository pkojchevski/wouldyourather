import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import QuestionList  from '../components/QuestionList'
import { getQuestionsAsync } from '../actions/questions'
import { getUsersAsync } from '../actions/users'
import { getAnsweredQuestionsFromUser, getUnansweredQuestionsFromUser} from '../utils'


class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getQuestionsAsync())
        this.props.dispatch(getUsersAsync())
    }

    handleClick = (id, typeOfQuestion) => {
        typeOfQuestion === "answered" 
        ? this.props.history.push(`/question/${id}/report`)
        : this.props.history.push(`/question/${id}`)
    }

    render() {
        const { unansweredQuestions, answeredQuestions } = this.props
        return (
            <>
                { unansweredQuestions && unansweredQuestions.length > 0 &&  (
                    <div className="home-tabs">
                        <Tabs defaultActiveKey="unansweredQuestions">
                            <Tab eventKey="unansweredQuestions" title="Unanswered Questions">
                                <QuestionList 
                                    questions={unansweredQuestions}
                                    handleClick = {this.handleClick}
                                    typeOfQuestion="unanswered"
                                />
                            </Tab>
                            <Tab eventKey="answeredQuestions" title="Answered Questions">
                                <QuestionList 
                                    typeOfQuestion="answered" 
                                    questions={answeredQuestions} 
                                    handleClick = {this.handleClick}
                                />
                            </Tab>
                        </Tabs>
                    </div>
                    )
                }
            </>
        )
    }
}

Home.propTypes = {
    answeredQuestions:PropTypes.array,
    unansweredQuestions:PropTypes.array
}

const mapStateToProps = ({questions, auth}) => ({
    answeredQuestions:getAnsweredQuestionsFromUser(questions.questions, auth.authedUser),
    unansweredQuestions: getUnansweredQuestionsFromUser(questions.questions, auth.authedUser)
})
export default connect(mapStateToProps)(Home)