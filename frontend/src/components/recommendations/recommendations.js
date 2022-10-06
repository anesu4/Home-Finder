// import React from 'react';
import React, { useState } from "react";
import Results from '../results/results';
import getRecommendations from '../../util/realestateUtil';

import { Button, Container, Row, Col } from "react-bootstrap";

function Recommendations(props) {
    const results = [];

    const [recommendations, setRecommendations] = useState('r');

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
                            <Button className="blue-Button" onClick={ () => getRecommendations(setRecommendations)}>Get Recommendation</Button>
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