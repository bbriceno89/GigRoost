# GigRoost - A Platform for Artists to Find Places to Stay

GigRoost is a full-stack application built with React, Flask, SQL, and Python that facilitates musicians and artists in finding places to stay while traveling, offered by willing hosts in exchange for tickets to their shows. This README.md provides instructions on how to run both the front-end and back-end components of the application, along with a list of dependencies that need to be installed.

## Table of Contents 
1.  [Introduction](#introduction)
2.  [Features](#features)
3.  [Requirements](#requirements)
4.  [Installation](#installation)
5.  [Front-end Setup](#front-end-setup)
6.  [Back-end Setup](#back-end-setup)
7.  [Running the Application](#running-the-application)
8.  [API Endpoints](#api-endpoints)
9.  [Contributing](#contributing)
10. [License](#license)


## Introduction

GigRoost is a web application designed to connect musicians and artists with hosts who are willing to provide them with places to stay while they are on tour. Artists can browse and find suitable accommodation options offered by hosts in exchange for tickets to their shows, fostering a sense of community and mutual support within the music industry.

The front-end is built using React, while the back-end uses Flask, Flask-Restful, SQLAlchemy, and other supporting libraries.

## Features

* User authentication and registration for artists and hosts
* Artist profiles with tour details and show information
* Host profiles with available rental options
* Search functionality to find suitable matches between artists and hosts
* Messaging system for communication between artists and hosts

## Requirements

To run the web application, you need the following software installed on your system:

- Node.js (>= 12)
- Python (>= 3.8)
- npm (Node.js package manager)
- pip (Python package manager)

## Installation

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/your-team/gigroost.git
   cd gigroost

## Front-end Setup

+ Navigate to the front-end directory: `cd client`

+ Install the required Node.js packages: `npm install`

## Back-end Setup

+ Navigate to the back-end directory: `cd server`

+ Create a virtual environment (optional but recommended): `python -m venv venv`

+ Activate the virtual environment:
  - On Windows: `venv\Scripts\activate`
  - On macOS and Linux: `source venv/bin/activate`

+ Install the required Python packages: `pip install -r requirements.txt`

+ Initialize the database:
  ```bash
  flask db init
  flask db migrate -m "Initial migration"
  flask db upgrade

## Running the Application

1. Start the front-end development server:
   ```bash
   cd client
   npm run dev

The application should now be accessible at http://localhost:5173/ in your web browser 
  
2. Start the back-end server:
   ```bash
   cd server
   flask run

The backend will run on http://localhost:5555 by default.

## API Endpoints

The backend provides the following API endpoints:

- POST /signup: Create a new user account.
- GET /check_session: Check the user's session status.
- POST /login: Log in a user.
- DELETE /logout: Log out a user.
- GET /reviews: Retrieve all reviews.
- POST /reviews: Create a new review.
- DELETE /reviews/<int:id>: Delete a review by ID.
- GET /bookings: Retrieve all artist bookings.
- GET /shows: Retrieve all shows.
- GET /rentals: Retrieve all rental listings.
- POST /rentals: Create a new rental listing.
- GET /rentals/<int:id>: Retrieve a rental listing by ID.
- PATCH /rentals/<int:id>: Update a rental listing by ID.
- DELETE /rentals/<int:id>: Delete a rental listing by ID.

## Contributing

We welcome contributions from the community to enhance GigRoost. If you find any bugs or have suggestions for new features, please feel free to open an issue or submit a pull request

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software according to the terms of the license.
