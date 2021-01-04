import React from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const QuestionItem  = ({question, users, handleClick, typeOfQuestion}) => {

  const onHandleClick = () => {
      handleClick(question.id, typeOfQuestion)
  }
    return (
    <Card className="w-75 mt-3 mx-auto p1">
        <Card.Header className="w-100">{users[question.author].name} asks</Card.Header>
          <Card.Body className="p-2">
            <Container fluid>
              <Row>
                <Col md={5} className="my-auto text-center">
                { (users && users[question.author]) && <Image width="120" src={users[question.author].avatarURL} rounded />}
                </Col>
                <Col md={7} >
                  <Row className="question-item-text">
                    <h4 className="w-100">Would You rather...</h4>
                    <p>...{question.optionOne.text}...</p>
                    <Button variant="outline-success" block onClick={onHandleClick}>View Pull</Button>
                  </Row>
                </Col>
              </Row>
             </Container>
          </Card.Body>
      </Card>
    );
}

QuestionItem.propTypes = {
  users: PropTypes.object,
};

const mapStateToProps = ({users}) => ({
  users
})
 
export default connect(mapStateToProps)(QuestionItem);