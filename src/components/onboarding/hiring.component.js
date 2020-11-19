import React from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestForm from './request-form';

function Hiring() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 3 }}>
                    <Tabs defaultActiveKey="freelance" id="uncontrolled-tab-example">
                        <Tab eventKey="freelance" title="Freelance">
                            <RequestForm />
                        </Tab>
                        <Tab eventKey="legalized" title="Legalized">
                            <RequestForm />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default Hiring;