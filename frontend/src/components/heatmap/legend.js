import React from 'react';
import './heatmap.css';

// Import Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Legend = () => {
    return (
        <div className="legend">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <p1>Get Personalised Recommendations</p1>
                    </Col>
                    <Col xs={6} md={4}>
                        <button className="recommendations-button">Get Recommendations</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Legend;