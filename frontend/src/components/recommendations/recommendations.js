// import React from 'react';
import React, { useState } from "react";
import Results from '../results/results';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const results = [];

const [recommendations, setRecommendations] = useState('r');

function Recommendations(props) {
    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <p1>Get Personalised Recommendations</p1>
                        </Col>
                        <Col xs={6} md={4}>
                            {/* <button className="recommendations-button">Get Recommendations</button> */}
                            <button className="blue-Button" onClick={ () => getRecommendations(setRecommendations)}>Get Recommendation </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                {/* Get Results */}
                <Container>
                    <Results result={results}/>
                </Container>
            </div>
        </div>
        
    );
}
export default Recommendations;