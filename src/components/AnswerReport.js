import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'

const AnswerReport = ({questionText, totalVotes, votes}) => {
    const now = (votes && totalVotes !== 0) ? Math.round(votes/totalVotes * 100,0) : 0
    const question = questionText && (questionText.charAt(0).toUpperCase() + questionText.slice(1))
    return (
       <Row className="w-100 p-1">
            <Card className="w-75 mb-2 mx-auto">
                <Card.Body className="w-100">
                    <p className="text-success">
                        <strong>
                            {question}?
                        </strong>
                    </p>
                    <ProgressBar variant="success" className="w-100" now={now} label={`${now}%`} />
                    <p className="text-center">{votes} out of {totalVotes} votes</p>
                </Card.Body>
            </Card>
        </Row>
    );
};


AnswerReport.propTypes = {
    questionText:PropTypes.string,
    totalVotes: PropTypes.number,
    votes: PropTypes.number
};


export default AnswerReport;
