import { connect } from "react-redux";
import React from 'react';
import { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isUserLoggedIn } from '../../store/actions/login.actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.data,
        email: state.email
    };
};

const mapDispatchToProps = dispatch => {
    return {
        isUserLoggedInPost: isUserLoggedIn
    }
}

function NavMenu(props) {
    const getIsUserLoggedIn = () => props.isUserLoggedInPost(props.email);
    useEffect(getIsUserLoggedIn, []);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Resource Management</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/hiring">Hiring Form</Nav.Link>
                    {props.isUserLoggedIn ?
                        <Nav.Link as={Link} to="/applications">Applications</Nav.Link>
                        : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);

// export default NavMenu;