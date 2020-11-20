import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import '../../styles.css';
import { logIn } from '../../store/actions/login.actions';
import { connect } from 'react-redux';
import { userLoggedInSelector } from '../../store/selectors/loginSelector';
import { createStructuredSelector } from "reselect";

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.loginReducer.isUserLoggedIn
    };
};

// const mapStateToProps = createStructuredSelector({
//     isUserLoggedIn: userLoggedInSelector
// });

const mapDispatchToProps = dispatch => {
    return {
        logInPost: (loginRequest) => dispatch(logIn(loginRequest))
    }
}

function Login(props) {
    const [login, setLogin] = useState({ email: '', password: '' });
    const [showToast, setShowToast] = useState(props.isUserLoggedIn);
    const [error] = useState();
    console.log('isUserLoggedIn', props.isUserLoggedIn);
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 4 }}>
                    <Row className="containe mt-5">
                        <Form className="form-width">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setLogin({ ...login, email: e.target.value }) }} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => { setLogin({ ...login, password: e.target.value }) }} />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className="row-footer">
                        <Button variant="primary" type="submit" onClick={(e) => { e.preventDefault(); console.log('loginRequest', login); console.log('loginpost', props.logInPost); props.logInPost(login); }}>
                            Submit
                        </Button>
                        <Button variant="default">
                            Cancel
                        </Button>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.isUserLoggedIn ? <Toast onClose={() => setShowToast(!showToast)} show={showToast} animation={false}>
                        <Toast.Body>Login Success</Toast.Body>
                    </Toast> : <p>Login Failed</p>}
                </Col>
            </Row>
        </Container>

    );
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;