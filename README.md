# GigRoost - A Platform for Artists to Find Places to Stay

GigRoost is a full-stack application built with React, Flask, SQL, and Python that facilitates musicians and artists in finding places to stay while traveling, offered by willing hosts in exchange for tickets to their shows. This README.md provides instructions on how to run both the front-end and back-end components of the application, along with a list of dependencies that need to be installed.

## Table of Contents 
1. [Introduction](#introduction)
2. [Features](#features)
3. [Dependencies](#dependencies)
4. [Installation](#installation)
5. [Front-end Setup](#front-end-setup)
6. [Back-end Setup](#back-end-setup)
7. [Running the Application](#running-the-application)
8. [Contributing](#contributing)
9. [License](#license)


## Introduction

GigRoost is a web application designed to connect musicians and artists with hosts who are willing to provide them with places to stay while they are on tour. Artists can browse and find suitable accommodation options offered by hosts in exchange for tickets to their shows, fostering a sense of community and mutual support within the music industry.

## Features

* User authentication and registration for artists and hosts
* Artist profiles with tour details and show information
* Host profiles with available rental options
* Search functionality to find suitable matches between artists and hosts
* Messaging system for communication between artists and hosts

## Dependencies

Before running GigRoost, you need to ensure the following dependencies are installed:

### Front-end
* Node.js(v14.0.0 or higher)
* npm 

### Back-end
* Python(v3.8 or higher)
* Flask(v2.0 or higher)
* SQLAlchemy(v.14 or higher)
* SQLite (v3.30 or higher) 

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
  
2. Start the back-end server:
   ```bash
   cd server
   flask run

The application should now be accessible at http://localhost:3000/ in your web browser 

## Contributing

We welcome contributions from the community to enhance GigRoost. If you find any bugs or have suggestions for new features, please feel free to open an issue or submit a pull request

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software according to the terms of the license.
