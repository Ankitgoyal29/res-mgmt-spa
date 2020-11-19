import React from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../../../public/home.jpg';
import Container from 'react-bootstrap';
import '../../styles.css';

function Home() {
    return (
        <img src={home} className="img-fluid" alt="" />
        // <Container>
        //     <Image src="../../../public/home.jpg/100px250" fluid />
        // </Container>
    );
}

export default Home;