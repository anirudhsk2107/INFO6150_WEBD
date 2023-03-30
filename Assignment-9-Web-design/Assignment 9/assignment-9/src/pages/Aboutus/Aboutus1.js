import React from 'react'
import Card from 'react-bootstrap/Card';
import image4 from './modern.webp';
import image3 from './interior.jpeg';
import image2 from './espressobar.jpeg';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Jobs from '../Jobs/Jobs';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../Login/Login';

function Aboutus() {
    let cardItems = [
    {
        description:" Our coffee shop has been a beloved community hub for over two decades, serving the finest coffee beans and homemade pastries. We're passionate about coffee and believe that it brings people together. Come join us and be a part of our coffee-loving community.",
        image:image2,
        cardColor: "Primary"
    },
    {
        description:"Over the years, our coffee shop has grown in both size and popularity. What started as a small, family-owned business has now become a thriving community hub, serving customers from all over the city. We've expanded our menu to include a wider range of coffee drinks, teas, and cold beverages, as well as a variety of delicious sandwiches and baked goods. Despite our growth, we remain committed to our roots - quality, community, and a passion for great coffee.",
        image:image4,
        cardColor: "Success"
    },
    {
        description:"We invite you to step into our beautiful coffee shop, where modern and old-world charm come together. Our cozy atmosphere and welcoming staff create a warm and inviting ambiance that is perfect for catching up with friends, meeting new people, or enjoying some alone time. Our commitment to quality and attention to detail are evident in every cup of coffee we serve. We believe that coffee is best enjoyed with good company, and we welcome you to come and share a cup with us. Whether you're here to work, read, or simply relax, we invite you to come and experience the joy of coffee in our charming and modern yet old-looking coffee shop.",
        image:image3,
        cardColor: "Warning"
    },
    {
      description:"Our coffee shop is located in the heart of the city, surrounded by stunning architecture and picturesque views. We invite you to come and relax with a warm cup of coffee in our cozy and welcoming atmosphere. Whether you're a local or just passing through, our doors are open to everyone. We look forward to seeing you soon!",
      iframeSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1403.0852909207862!2d-73.987699!3d40.763037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7c19f0c55%3A0xec6a3c3c8f8b9f9a!2sStarbucks!5e0!3m2!1sen!2sus!4v1589572750290!5m2!1sen!2sus",
      cardColor: "Info"
    }
]

let cardDom = cardItems.map((e,i)=>{
    return (
        <Card
        bg={e.cardColor.toLowerCase()}
        key={e+i}
        text={e.cardColor.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: "70%", marginLeft: "15%" }}
        className="mb-2"
        >
      
        <br></br>
        {e.image ? <Card.Img variant="top" src={e.image} /> : <iframe src={e.iframeSrc} width="100%" height="500px"></iframe>}
        <Card.Body>
          <Card.Text>
          {e.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
})
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

{cardDom}

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

export default Aboutus