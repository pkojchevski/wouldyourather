import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import QuestionList  from '../components/QuestionList'
import { getQuestionsAsync } from '../actions/questions'
import { getUsersAsync } from '../actions/users'

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getQuestionsAsync())
        this.props.dispatch(getUsersAsync())
    }
    render() {
        console.log(this.props)
        const { unansweredQuestions, answeredQuestions } = this.props

        return (
        <div className="home-tabs">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Unanswered Questions">
                <QuestionList questions={unansweredQuestions}/>
            </Tab>
            <Tab eventKey="contact" title="Answered Questions">
                <QuestionList questions={answeredQuestions}/>
            </Tab>
            </Tabs>
        </div>
        )
    }
}

Home.propTypes = {

}

const mapStateToProps = ({questions}) => ({
    answeredQuestions:Object.values(questions),
    unansweredQuestions: Object.values(questions)
})
export default connect(mapStateToProps)(Home)