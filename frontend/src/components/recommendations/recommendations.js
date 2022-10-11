// import React from 'react';
import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Results from '../results/results';
import RealestateUtil from "../../util/RealestateUtil";
const realestateUtil = new RealestateUtil();

function Recommendations(props) {
    const [results, setResults] = useState(null);

    // const [recommendations, setRecommendations] = useState('r');

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
                            <Button className="blue-Button" onClick={ () => realestateUtil.getRecommendations(setResults)}>Get Recommendation</Button>
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