
import Card from 'react-bootstrap/Card';
import React from 'react'
import image from './contact.webp';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Aboutus from '../Aboutus/About-us';
import Jobs from '../Jobs/Jobs';
import Home from '../Home/Home'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../Login/Login';

function Contact() {
  return (
      <>
       
<Navbar bg="dark">
  <Container id="navContainer">
    <Navbar.Brand class="nav1">
    <Link to = '/Home' class="nav1">Home</Link> {"   "}
    <Link to = "/Aboutus" class="nav1">About</Link>{"   "}
    <Link to = "/Jobs" class="nav1">Jobs</Link>{"   "}
    <Link to = "/Contact" class="nav1">Contact</Link>{"   "}
    <Link to = "/" class="nav1">Logout</Link>{"   "}
    </Navbar.Brand>
  </Container>
</Navbar>
<Routes>
<Route path = "/Home" element = {<Home/>}></Route>
<Route path = "/Aboutus" element = {<Aboutus/>}></Route>
<Route path = "/Contact" element = {<Contact/>}></Route>
<Route path = "/Jobs" element = {<Jobs/>}></Route>
</Routes>
<Card className="bg-dark text-white">
      <Card.Img src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text id="contacttext">
          <b>Contact Us</b>
          <br></br>
          <br></br>
            <b>You can reach out to us for reservations or any other queries via the following ways: </b>
            <br></br>
            <b>Open hours: Mon-Fri 1000 to 1800 EST</b>
            <br></br>
            <b>Email Id:abcd@travelservice@email.co</b>
            <br></br>
            <b>Location: 123 heath street, Boston 02120</b>
            <br></br>
            <b>Contact: 02120012010</b>
        </Card.Text>
      </Card.ImgOverlay>
</Card>


<div class="navbar1">
  <ul>
      <li>About Us</li>
      <br></br>
      <li>Press Releases</li>
  </ul>

  <ul>
      <li>Web Checkin</li>
      <br></br>
      <li>Covid 19 Information</li>
  </ul> 
  <br></br>
  <section id="section">
    &copy; Copyright@2022. All rights reserved.
  </section>
</div>
</>
 
  );
}

export default Contact