import React, { useReducer } from 'react';
import { Card, Container, Row, Col , Image, Badge} from 'react-bootstrap'

const RankingUserItem = ({user}) => {
    return ( 
        <Card>
            <Card.Body>
                <Container>
                    <Row>
                        <Col xs={8} md={8}>
                        <Col xs={6} md={4}>
                        { user && <Image src={user.avatarURL} rounded />}
                        </Col>
                        <Col xs={6} md={8}>
                            <Row>
                                <h3>{user.name}</h3>
                                <p>Answered questions <span>{Object.keys(user.answers).length}</span></p>
                                <p>Created questions <span>{user.questions.length}</span></p>
                            </Row>
                        </Col>
                        </Col>
                        <Col md={4}>
                            <Row> <div className="score-title">score</div></Row>
                            <Row>
                                <Badge pill variant="success">
                                    {Object.keys(user.answers).length + user.questions.length}
                                </Badge>
                            </Row>
                        </Col>
                    </Row>
            </Container>
         
        </Card.Body>
      </Card>
     );
}
 

export default RankingUserItem;