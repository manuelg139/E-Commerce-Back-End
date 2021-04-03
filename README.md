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
- Navigate to the Develop folder
- Run 'npm i' on your command line to install dependencies.
- Open your MYSQL Workbench and run the 'schema.sql' documentation on a new 'SQL File'
- Look for the file .env.EXAMPLE on your root folder
- Create a new file and title it .env copy and paste the content from .env.EXAMPLE and update the file with your personal MYSQL Workbench information (User and Password)
- Seed the seed files into your Workbench by running the line (npm run seed) on the command line

## Usage

- After installation kick off the program by runing 'npm start' or 'node server.js' in the termial at a Develop folder level.
- Open your 'Insomnia' program

![Screen Shot 2021-04-02 at 10 33 32 PM](https://user-images.githubusercontent.com/75399668/113466804-236c1d00-9404-11eb-8fad-2fcbb9b46fa1.png)
### Use the GET method to see the data for the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories)
- Products ---- navigate to the port (http://localhost:3001/api/products)
- Tags ---- navigate to the port (http://localhost:3001/api/tags)

![Screen Shot 2021-04-02 at 10 33 46 PM](https://user-images.githubusercontent.com/75399668/113466803-236c1d00-9404-11eb-9938-9d6fd0b008e1.png)
### Use the POST method to post a JSON item into the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories)
- Products ---- navigate to the port (http://localhost:3001/api/products)
- Tags ---- navigate to the port (http://localhost:3001/api/tags)

![Screen Shot 2021-04-02 at 10 34 01 PM](https://user-images.githubusercontent.com/75399668/113466802-236c1d00-9404-11eb-9e51-2c1497b2ddec.png)
### Use the PUT method to update a JSON item into the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories "ITEM NUMBER")
- Products ---- navigate to the port (http://localhost:3001/api/products "ITEM NUMBER")
- Tags ---- navigate to the port (http://localhost:3001/api/tags "ITEM NUMBER")

![Screen Shot 2021-04-02 at 10 34 13 PM](https://user-images.githubusercontent.com/75399668/113466801-236c1d00-9404-11eb-8fc2-8131b46530fd.png)
### Use the DELETE method to delete a JSON item into the following

- Categories ---- navigate to the port (http://localhost:3001/api/categories "ITEM NUMBER")
- Products ---- navigate to the port (http://localhost:3001/api/products "ITEM NUMBER")
- Tags ---- navigate to the port (http://localhost:3001/api/tags "ITEM NUMBER")

## Media
![Screen Shot 2021-04-02 at 10 37 53 PM](https://user-images.githubusercontent.com/75399668/113466799-22d38680-9404-11eb-9a04-73bca91f5190.png)
- Video Link (https://drive.google.com/file/d/15F_sR7TpAD6ONO485fAXeLR4_z0EYOHw/view?usp=sharing)

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





