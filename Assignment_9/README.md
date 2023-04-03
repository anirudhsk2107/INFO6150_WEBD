# This is a react website for a coffee shop
We land at the login page which has 2 input fields - email & password
The credentials are verified from local mongo db. There are already records present in the db to verify with

The folder has all the react components consisting of 5 pages
Login (Landing page)
Home 
About 
Jobs 
Contact 

# Controllers: 
user.controller.js
Node.js code implements a straightforward authentication system that includes fundamental validation checks. 
The system utilizes the Express framework to create routes and the Mongoose library to connect to a MongoDB database. 

Logintest: This function is called when a user tries to login. 
Validates the email and password entered by the user.
If valid, searches for a user credentialswithin the database. 
If user is found, then it compares the entered password with the hashed password in the db.
If the passwords match, it sends a "Login successful" else sends an "invalid credentials" message.



# Models
user.models.js:

This is a Node.js module defining Mongoose schema for a user object comprising name, email, and password fields. 
It exports two methods & both take a user object and a callback function as input arguments.
- addUser 
- updateUser

# Routes
user.routes.js:

This is an Express.js router module used for managing users in a user management system.
It defines several HTTP routes that map to various user management functions implemented in the user.controller.js module.

- The POST /Logintest route authenticates a user based on their email and password, using the loginuser function in the user.controller.js module.
- The POST /user/create route creates a new user, using the userpost function in the user.controller.js module.
- The GET /user/getAll route retrieves a list of all users, using the getAlluser function in the user.controller.js module.
- The PUT /user/edit route modifies an existing user, using the editusers function in the user.controller.js module.
- The DELETE /user/delete route removes an existing user, using the deleteuser function in the user.controller.js module.


# Services
user.services.js: 

- The code contains several functions for managing users in a web application, following the Model-View-Controller (MVC) pattern.
- The createuser function creates a new user in the database by first checking if the email already exists and then saving the user to the database using the User.addUser method.
- The getusers function retrieves all users from the database using the User.find method and returns them in the response.
- The updateusers function updates an existing user in the database by first checking if the email exists and then updating the user's name and password with the given values using the User.findOneAndUpdate method.
- The removeuser function deletes a user from the database by first checking if the email exists and then deleting the user from the database using the User.delete method.
- The user.controllers file contains the controller functions that interact with the User model, while the user.route file defines the routes that map to these controller functions.


# React

* login.js
- This is a Login page built using React, which allows users to enter their email and password to login to an application. 
- It contains form elements for email, password and a submit button. The page validates the user input using regular expressions and displays error messages in case of invalid input. 
- If the user's input is valid, it calls the login function, which sends the email and password to a server for authentication. 
- If the authentication is successful, the page navigates the user to the home page. If the authentication fails, error messages are displayed accordingly.

* Home.js
- This is a JavaScript file for a React component called "Home".
- It imports various image files and other components such as Card, Container, Navbar, and Routes from React Bootstrap library and BrowserRouter, Link, Route from React Router DOM library.
- The component returns a JSX expression that renders a navigation bar, a gallery of images, a table of drinks, and a footer.
- The navigation bar includes links to the Home page, About Us, Jobs, Contact, and Logout.
- The gallery displays various images related to coffee, including the Coffee Shop, Takeaway Cup, Coffee Table, Menu, Coffee Shop Board, Vanilla Latte, Cold Coffee, and Hot Chocolate.
- The table displays the names, descriptions, and prices of some specialty drinks offered by the coffee shop, such as Cappuccino, Latte, and Iced Mocha.
- The footer includes a list of links and a copyright statement.

* About.js
- The code is written in JavaScript using the React library.
- It imports various components from different libraries such as Bootstrap and React Router.
- The Aboutus function defines an array of objects cardItems that contains information about the coffee shop in the form of descriptions, images, and colors.
- The function maps through the cardItems array to create multiple Card components, each with its own properties such as background color and image source.
- The Navbar component is used to create a navigation bar that allows users to navigate between different pages of the website.
- The Routes component is used to specify the different routes and their corresponding components.
- The cardDom variable is rendered in the return statement to display the Card components on the page.
- The function also creates a footer with links to other pages and a copyright notice.


* Jobs.js
- The code is written in React, a JavaScript library for building user interfaces.
- The code imports various components from the react-bootstrap library, including Card, Col, Row, Container, and Navbar.
- The code also imports other components from the React Router library, including BrowserRouter, Routes, Route, and Link.
- The Jobs() function renders a page with a navigation bar at the top, containing links to the Home, About, Jobs, Contact, and Logout pages.
- The page also contains three job listings, each displayed as a Card with an image, job title, and job description.
- At the bottom of the page, there is a footer with two columns of links and a copyright notice.



* Contact.js
- The Contact component imports several React components from react-bootstrap and react-router-dom libraries.
- The component renders a Navbar component that provides links to other pages on the website such as Home, About, Jobs, and Contact.
- The Routes component from react-router-dom is used to define the routes for different pages. Four routes are defined for Home, About, Contact, and Jobs.
- The component renders a Card component that displays an image and contact information for the travel service.
- The Card component contains a Card.Title and Card.Text components that display the title and contact information, respectively.
- The component also renders a div element with class name navbar1 that contains two unordered lists (ul), each with two list items (li).
- The div element displays links to About Us, Press Releases, Web Checkin, and Covid 19 Information.
- The component also renders a section element with an id attribute and text content to display copyright information.







