import React from 'react';
import CoffeeShopImg from './coffeeshop.jpeg';
import CoffeeTakeawayImg from './coffee_takeaway2.jpeg';
import CoffeeTableImg from './coffeetable.jpeg';
import MenuImg from './menu.png';
import CoffeeShopBoardImg from './coffeeshopimg.webp';
import VanillaLatteImg from './vanilla_latte.jpeg';
import ColdCoffeeImg from './cold_coffee.jpeg';
import HotChocolateImg from './hot_chocolate.jpeg';
import Logo from './Logo.jpeg';
import Card from 'react-bootstrap/Card';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Aboutus from '../Aboutus/About-us';
import Jobs from '../Jobs/Jobs';
import Contact from '../Contact/Contact';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Home() {

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

    <div className="gallery">
      <div>
      <img className="image_logo" src={Logo} alt="Coffee Shop logo" />
    <h1 style={{ fontFamily: 'serif' }}>COFFEE SHOP AMERICAN BLEND</h1>
      </div>

      <div className="gallery_head">
        <h2>GALLERY</h2>
      </div>

      <div className="gallery_body" style={{ display: 'inline' }}>
          <div className="gallery_1" style={{ paddingLeft: '125px' }}>
            <img className="gallery_img" src={CoffeeShopImg} alt="Coffee Shop" />
            <img className="gallery_img" src={CoffeeTakeawayImg} alt="Takeaway cup" />
            <img className="gallery_img" src={CoffeeTableImg} alt="Coffee table" />
            <img className="gallery_img" src={MenuImg} alt="Menu" />
          </div>

          <div className="gallery_2" style={{ paddingLeft: '125px' }}>
            <img className="gallery_img" src={CoffeeShopBoardImg} alt="Coffee Shop Board" />
            <img className="gallery_img" src={VanillaLatteImg} alt="Vanilla Latte" />
            <img className="gallery_img" src={ColdCoffeeImg} alt="Cold Coffee" />
            <img className="gallery_img" src={HotChocolateImg} alt="Hot chocolate" />
          </div>
      </div>

      <section>
      <h2>OUR SPECIALTY DRINKS</h2>
      <table>
        <tr>
          <th>Drink</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Cappuccino</td>
          <td>Espresso with steamed milk and foam</td>
          <td>$3.50</td>
        </tr>
        <tr>
          <td>Latte</td>
          <td>Espresso with steamed milk</td>
          <td>$4.00</td>
        </tr>
        <tr>
          <td>Iced Mocha</td>
          <td>Espresso, chocolate, and milk over ice</td>
          <td>$4.50</td>
        </tr>
      </table>
    </section> 
    </div>

    <div className="navbar1">
          <ul>
            <li>About Us</li>
            <br />
            <li>Press Releases</li>
          </ul>
  
          <ul>
            <li>Web Checkin</li>
            <br />
            <li>Covid 19 Information</li>
          </ul> 
          <br />
          <section id="section">
            &copy; Copyright@2022.
            All rights reserved.
          </section>
        </div> 

    </>
  );
}

export default Home;
