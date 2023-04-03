import Card from 'react-bootstrap/Card';
import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from '../Login/Login'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Error() {
  return (
<>   
<Navbar bg="dark">
  <Container>
    <Navbar.Brand class="nav1">
    <Link to = '/' class="nav1">Login</Link> {"   "}
    </Navbar.Brand>
  </Container>
</Navbar>
<Card>
     
    <Card.Title>Please direct to Login Page</Card.Title>

      
</Card>

</>

  );
}

export default Error