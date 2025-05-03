# Modern Blog App

A clean, full-stack blog application that allows users to register, login, create, and publish blog posts on any topic of interest. This platform offers a seamless user experience with a minimalist design focused on content.

## Screenshots
  
  ### Login Page
 <img width="960" alt="2" src="https://github.com/user-attachments/assets/044bf608-f27d-43ea-87bc-8450fc46744d" />

  
  ### Registration Page
  <img width="950" alt="3" src="https://github.com/user-attachments/assets/b62a186e-4378-4bdc-bb2c-24e21761cf48" />

  
  ### Blog Editor
 <img width="946" alt="4" src="https://github.com/user-attachments/assets/fceb06c2-28d9-47d4-9613-ee4fa0cb404c" />

  
  ### Blog Post View
<img width="947" alt="5" src="https://github.com/user-attachments/assets/8e38334d-61cc-43bc-ac81-c1888b91e6dc" />

  
  ### Home Page / Blog List
<img width="953" alt="6" src="https://github.com/user-attachments/assets/6ab81b94-0325-4a10-9004-8dcd1b9e6f3b" />


## Features

### User Authentication
- User registration with email, username, and password
- Secure login system
- Profile management
- Session management with logout functionality

### Content Management
- Create and publish blog posts on any topic
- Rich text editing capabilities
- Post editing and deletion
- Image upload support for blog post covers

### User Interface
- Clean, responsive design
- User profile section with "About Me"
- Article preview cards on homepage
- Full article view with author information
- Navigation between different sections (Home, About, Contact, Write)
- Social media integration

## Technology Stack

### Frontend
- **React.js**: Frontend library for building the user interface
- **React Router**: For navigation between different components
- **CSS/SCSS**: For styling components
- **Axios**: For API requests to the backend

### Backend
- **Spring Boot**: Java-based framework for the backend
- **Spring Security**: For authentication and authorization
- **RESTful API**: For communication between frontend and backend

### Database
- **MongoDB**: NoSQL database for storing user data, blog posts, and other information

### Deployment
- Instructions for deploying the application on various platforms

## Installation and Setup

### Prerequisites
- Node.js and npm
- Java Development Kit (JDK) 17
- MongoDB

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/younesskerouani/Full-Stack-Blog-App-reactjs-SpringBoot.git

# Navigate to the frontend directory
cd Full-Stack-Blog-App-reactjs-SpringBoot/frontend

# Install dependencies
npm install

# Start the development server
npm start
```

### Backend Setup
```bash
# Navigate to the api directory
cd Full-Stack-Blog-App-reactjs-SpringBoot/api

# Build the application
./mvnw clean install

# Run the application (Spring Boot with JDK 17)
./mvnw spring-boot:run
```

### Database Setup
1. Install MongoDB Community Edition
2. Create a database named 'techblog'
3. Update the connection string in `application.properties`


## User Guide

### How to Create an Account
1. Navigate to the registration page by clicking "REGISTER" in the top navigation bar
2. Fill in the required fields:
   - Email address
   - Username
   - Password
3. Click the "register" button
4. Upon successful registration, you will be redirected to the login page
5. Enter your username and password to log in

### How to Post a Blog
1. After logging in, click on the "WRITE" link in the top navigation bar
2. You will be directed to the blog editor page with the following elements:
   - Title field at the top
   - Content editor in the middle
   - "Publish" button at the top right
3. Enter a title for your blog post
4. Write your content in the editor area
5. When ready, click the "Publish" button
6. Your post will now appear on the home page and in your profile

