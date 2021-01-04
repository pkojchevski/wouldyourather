import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import AnswerReport from './AnswerReport';
import { connect } from 'react-redux'

class QuestionReport extends Component {
    state = {
        question:null,
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({question:this.props.questions[params.id]})
     }

    render() {
        const options = ['optionOne', 'optionTwo']
        const { question } = this.state
        const { users } = this.props
        const totalVotes = question && (question.optionOne.votes.length + question.optionTwo.votes.length)

        return (
            <Card className="w-75 mt-3 p1">
              <Card.Header>
                <strong>
                Asked by {users && question && users[question.author].name}: 
                </strong>
              </Card.Header>
              <Card.Body className="p-2">
                <Container fluid>
                  <Row>
                    <Col md={5} className="my-auto text-center">
                    { (users && question && users[question.author]) && 
                    <Image width="120" 
                           src={users && question && users[question.author].avatarURL} rounded 
                    />
                    }
                    </Col>
                    <Col md={7} >
                      <Row className="question-item-text">
                        <h4 className="w-100 text-center">Results:</h4>
                        {
                         options.map((option,id) => (
                            <AnswerReport 
                                key={id}
                                questionText={question && question[`${option}`].text}
                                totalVotes={totalVotes}
                                votes={question && question[`${option}`].votes.length}
                            /> 
                        ))
                        }
                      </Row>
                    </Col>
                  </Row>
                 </Container>
              </Card.Body>
          </Card>
        );
    }
}

QuestionReport.propTypes = {
   questions: PropTypes.object,
   users:PropTypes.object,
   authedUser: PropTypes.object
};

const mapStateToProps = ({questions, users, auth}) => ({
    questions:questions.questions,
    users,
    authedUser: auth.authedUser
})

export default connect(mapStateToProps)(QuestionReport);
