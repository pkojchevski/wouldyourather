import React from 'react';
import { Card, Container, Row, Col , Image, Badge} from 'react-bootstrap'
import TrophyCup from './TrophyCup';
import PropTypes from 'prop-types';

const RankingUserItem = ({user, rank}) => {
    return ( 
        <Card className="mb-3 w-75">
            <Card.Body className="m-0">
                <Container fluid className="m-0 p-0">
                    <Row>
                        <Col md={3}>
                            { user && <Image width="120" src={user.avatarURL} rounded />}
                            <TrophyCup color={rank === 0 ? 'gold' : (rank===2) ? 'silver' : 'bronze'}/>
                        </Col>
                        <Col md={7} className="ranking-user-item">
                            <Row className="mr-1">
                                <h4 className="mb-4">{user.name}</h4>
                                <p className="w-100 p-0 m-1">Answered questions <span className="float-right">{Object.keys(user.answers).length}</span></p>
                                <hr className="hor-line"/>
                                <p className="w-100 p-0 m-1">Created questions <span className="float-right">{user.questions.length}</span></p>
                            </Row>
                        </Col>
                        <Col md={2} className="ranking-user-item">
                            <Card>
                                <Card.Header className="text-center">
                                   Score
                                </Card.Header>
                                <Card.Body className = "card-body m-0 p-2 text-center">
                                <Badge pill variant="success">
                                    {Object.keys(user.answers).length + user.questions.length}
                                </Badge>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
         
        </Card.Body>
      </Card>
     );
}

RankingUserItem.propTypes = {
    user:PropTypes.object.isRequired,
    rank: PropTypes.number.isRequired
 };
 

export default RankingUserItem;