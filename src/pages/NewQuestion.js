import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addQuestionAsync } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOneText:'',
        optionTwoText:''
    }

    handleSubmit = (e) => {
       e.preventDefault()
       this.props.dispatch(addQuestionAsync({...this.state, author: this.props.author}))

       this.props.history.push('/')
    }

    handleChange = (e) => {
      const { value, name } = e.target
      this.setState({
          [name]:value
      })
    }

    render() {
        const { optionOneText, optionTwoText } = this.state
        return (
            <Card className="w-75">
                <Card.Header>
                    <h3 className="text-center">Create New Question</h3>
                </Card.Header>
                <Card.Body>
                   <div>
                       <p>Complete the question: </p>
                       <h3>Would you rather...</h3>
                       <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" 
                                    placeholder="Enter option one text here" 
                                    value={optionOneText}
                                    name="optionOneText"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <p className="horizontal-line text-center">OR</p>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" 
                                    placeholder="Enter option two text here" 
                                    value={optionTwoText}
                                    name="optionTwoText"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button className="btn btn-success btn-block" type="submit" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                   </div>
                </Card.Body>
          </Card>
        )
    }
}

NewQuestion.propTypes = {
  author: PropTypes.string
}

const mapStateToProps = ({auth}) => ({
    author:auth.authedUser.id
})

export default connect(mapStateToProps)(NewQuestion)