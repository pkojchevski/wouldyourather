import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Container, Row, Col, Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addQuestionAnswerAsync } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Question extends Component {
  state = {
    question:null,
    id:null,
    answerId:'optionOne'
  }

  componentDidMount() {
     const { authedUser } = this.props;
     const { match: { params } } = this.props;
     const question = this.props.questions[params.id]
     
     this.setState({
       answerId: authedUser.answers[params.id] || 'optionOne'
     })
     this.setState({id:params.id})
     this.setState({question})
  }

  handleClick = (e) => {
    this.setState({answerId: e.target.id})
  }

  handleSubmit = () => {
    this.props.dispatch(
      addQuestionAnswerAsync(
        {
         authedUser:this.props.authedUser.id,
         qid:this.state.id,
         answer:this.state.answerId
        }))
  }

    render() {
     
      const { users, redirectTo } = this.props
      const { question, answerId } = this.state

      if(redirectTo) {
        return <Redirect to={redirectTo}/>
      }
        return (
            <Card className="w-75 mt-3 p1">
              <Card.Header>
                <strong>
                  {users && question && users[question.author].name} asks:
                </strong>
              </Card.Header>
              <Card.Body className="p-2">
                <Container fluid>
                  <Row>
                    <Col md={4} className="my-auto text-center">
                    { (users && question && users[question.author]) && 
                    <Image width="160" 
                           src={users && question && users[question.author].avatarURL} rounded 
                    />
                    }
                    </Col>
                    <Col md={8} >
                      <Row className="question-item-text">
                        <h3 className="w-100">Would You Rather...</h3>
                        <Form>
                          { answerId && (<Form.Group>
                            <Form.Check
                                type='radio'
                                id="optionOne"
                                name="answerId"
                                label={question && question.optionOne.text}
                                onClick={this.handleClick}
                                defaultChecked={answerId === "optionOne"}
                            />
                            <Form.Check
                                name="answerId"
                                type='radio'
                                id="optionTwo"
                                label={question && question.optionTwo.text}
                                onClick={this.handleClick}
                                defaultChecked={answerId === "optionTwo"}
                            />
                          </Form.Group>)}
                        </Form>
                        <Button variant="success" block className="mt-2 mb-2" onClick={this.handleSubmit}>Submit</Button>
                      </Row>
                    </Col>
                  </Row>
                 </Container>
              </Card.Body>
          </Card>
        );
    }
}

Question.propTypes = {
   redirectTo:PropTypes.string,
   questions:PropTypes.object,
   users:PropTypes.object,
   authedUser: PropTypes.object
};

const mapStateToProps = ({questions, users, auth}) => ({
    questions:questions.questions,
    redirectTo:questions.redirectTo,
    users,
    authedUser: auth.authedUser
})

export default connect(mapStateToProps)(Question);