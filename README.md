# E-Commerce-Back-End

## Description

As a person in a postiion of leadership in your company, this app will allow you to turn your terminal into an Employee Tracking applciation to create, view, edit and delete employee and company data.

## License

<img width="170" alt="Screen Shot 2021-01-11 at 10 59 23 PM" src="https://img.shields.io/badge/license-MIT%20License-blue?style=flat-square">

## Table of Contents

- Installation
- Usage
- License
- Contributors
- Questions
- Tests

## Installation

- Open my Github Page and clone my repo called E-Commerce-Back-End into your local enviroment (Make sure to add a NODE .gitignore ).
- Run 'npm i' on your command line to install dependencies.
- Open your MYSQL Workbench and run the 'schema.sql' documentation on a new 'SQL File'
- Look for the file .env.EXAMPLE on your root folder. Update the file with your MYSQL Workbench information (User and Password)
- Seed the seed files into your Workbench by running the line (npm run seed) on the command line

## Usage

- After installation kick off the program by runing 'npm start' or 'node server.js' in the termial at a root level.
- Open your 'Insomnia' program

### Use the GET method to see the data for the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories)
- Products ---- navigate to the port (http://localhost:3001/api/products)
- Tags ---- navigate to the port (http://localhost:3001/api/tags)

### Use the POST method to post a JSON item into the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories)
- Products ---- navigate to the port (http://localhost:3001/api/products)
- Tags ---- navigate to the port (http://localhost:3001/api/tags)

### Use the PUT method to update a JSON item into the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories "ITEM NUMBER")
- Products ---- navigate to the port (http://localhost:3001/api/products "ITEM NUMBER")
- Tags ---- navigate to the port (http://localhost:3001/api/tags "ITEM NUMBER")

### Use the DELETE method to delete a JSON item into the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories "ITEM NUMBER")
- Products ---- navigate to the port (http://localhost:3001/api/products "ITEM NUMBER")
- Tags ---- navigate to the port (http://localhost:3001/api/tags "ITEM NUMBER")

## Media

- Video Link (https://drive.google.com/file/d/1Ob5YJlu_9XdpFr0DKs3npWsZQJxp0_1N/view?usp=sharing)

## Dependencies

- Sequelize
- Dotenv
- Mysql
- Mysql2
- Express

## Contributors

I worked on this project alone.

## Questions?

Follow me on Github manuelg139 or email me at manuelg139@gmail.com

## Tests

N/A
