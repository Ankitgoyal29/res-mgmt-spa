import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import '../../styles.css';


function Login() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 4 }}>
                    <Row className="containe mt-5">
                        <Form className="form-width">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className="row-footer">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="default">
                            Cancel
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;