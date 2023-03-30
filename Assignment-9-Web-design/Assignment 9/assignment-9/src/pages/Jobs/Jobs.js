import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from './job.png';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Aboutus from '../Aboutus/About-us';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Jobs() {
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
  <Row xs={1} md={2} className="g-6">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col id="Jobscard">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Data Analyst</Card.Title>
            <Card.Text>
              We are looking for a Data Analyst to join our team and help us make data-driven decisions. 
              The ideal candidate should have experience in analyzing large datasets and be able to interpret complex data models. 
              The Data Analyst will be responsible for analyzing data, creating reports, and providing insights that will help drive business decisions.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Col>
    ))}
     {Array.from({ length: 1 }).map((_, idx) => (
      <Col id="Jobscard">
        <Card>
          <Card.Img variant="top"  src={image}/>
          <Card.Body>
            <Card.Title>React Developers</Card.Title>
            <Card.Text>
            We are seeking a highly skilled React Developer to join our dynamic team. 
            The ideal candidate will have experience developing web applications using React.js and a strong understanding of front-end development technologies. 
            The React Developer will be responsible for designing and implementing user interfaces and collaborating with cross-functional teams to ensure that the product meets the needs of our clients.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Col>
    ))}
     {Array.from({ length: 1 }).map((_, idx) => (
      <Col id="Jobscard">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Social Media Manager</Card.Title>
            <Card.Text>
            We are seeking a skilled Social Media Manager to join our team. 
            The ideal candidate will have experience in social media management and a strong understanding of the latest social media trends and best practices. 
            The Social Media Manager will be responsible for developing and implementing social media strategies that will help promote our brand and engage with our audience. 
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Col>
    ))}
  </Row>
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

export default Jobs