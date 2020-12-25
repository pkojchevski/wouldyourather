import React from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux'
const QuestionItem  = ({question, users}) => {


    return (
    <Card>
        <Card.Header>{question.author} asks</Card.Header>
        <Card.Body>
        <Container>
  <Row>
    <Col xs={6} md={4}>
     { (users && users[question.author]) && <Image src={users[question.author].avatarURL} rounded />}
    </Col>
    <Col xs={6} md={8}>
        <Row>
            <h3>Would You rather</h3>
            <p>...{question.optionOne.text}...</p>
            <Button variant="outline primary">View Poll</Button>
        </Row>
    </Col>
  </Row>
</Container>
         
        </Card.Body>
      </Card>
    );
}

const mapStateToProps = ({users}) => ({
  users
})
 
export default connect(mapStateToProps)(QuestionItem);