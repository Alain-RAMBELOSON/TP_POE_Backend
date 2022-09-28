# TP_POE_Backend

# Context

Assessment for [M2i Formation](https://www.m2iformation.fr/).  
Wording provided by [Semifir](https://fr.linkedin.com/company/semifir).  

### Requirements

The goal is to develop a web application from scratch for a fictive car renting company in a week.  
The technologies used is up to the student.

- Create a vehicle which has a daily rent
- Create a customer
- Check the vehicle availability
- Record a start and end date for the rent
- Create a rent
- Allow the listing, editing and deletion of the vehicles, customers and rents

# Personal goals

- Create comprehensive pre-production documentation ( Entity Relationship Diagram, use cases, browser and mobile wireframes )
- Maintainable, extensible and intelligible folder and file architecture
- Use the minimum number of external packages possible

# Description

Backend server built with Express and MongoDB designed to work with the frontend application `TP_POE_Frontend` available at https://github.com/Alain-RAMBELOSON/TP_POE_Frontend


# Usage

### Run the server

- Download or clone this repository
- Open a terminal at the root of this repository  
- Run the `npm i` command  
- Get the `.env` file from the repository owner and put it into the `./src` folder 
- Run the `npm start` command

### For developers

- Run the `npm run dev` command at the root of the repository to get live updates on file changes

### Run the frontend application

Get and run the frontend application from https://github.com/Alain-RAMBELOSON/TP_POE_Frontend 

# API

## Tables

- vehicle
- customer
- rent

## Routes
### Create a record  
Use the POST method from  
`\<server\>/api/\<table\>`

### Get all records
Use the GET method from   
`\<server\>/api/\<table\>`

### Get a record by ID
Use the GET method from  
`\<server\>/api/\<table\>/:id`

### Update a record by ID
Use the PUT method from  
`\<server\>/api/\<table\>/:id`

### Delete a record by ID
Use the DELETE method from  
`\<server\>/api/\<table\>/:id`
