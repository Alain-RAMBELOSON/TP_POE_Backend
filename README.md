# TP_POE_Backend

# Context

Assessment for [M2i Formation](https://www.m2iformation.fr/).  
Wording provided by [Semifir](https://fr.linkedin.com/company/semifir).  

### Requirements

The goal is to develop a web application from scratch for a fictive car renting company in a week.  
The technologies used are up to the student.

- Create a vehicle which has a daily rent
- Create a customer
- Check the vehicle availability
- Record a start and end date for the rent
- Create a rent
- Allow the listing, editing and deletion of the vehicles, customers and rents

# Personal goals

- Reusable, maintainable, extensible and intelligible backend folder and file architecture

# Description

Backend server built with Express and MongoDB designed to work with the frontend application [TP_POE_Frontend](https://github.com/Alain-RAMBELOSON/TP_POE_Frontend).

# Usage

### Run the backend server

- Download or clone this repository
- Open a terminal at the root of this repository  
- Run the `npm i` command  
- Get the `.env` file from the repository owner and put it into the `./src` folder 
- Run the `npm start` command

### For developers

- Run the `npm run dev` command at the root of the repository to get live updates on file changes
- With [Visual Studio Code](https://code.visualstudio.com/download) and the [Rest client](https://github.com/Huachao/vscode-restclient) extension you can launch requests to the database.  
Open the `requests` folder, open a `*.rest` file and click on the `Send request` command which appears at the top left corner of the displayed document. 

### Run the frontend application

Run the frontend application [TP_POE_Frontend](https://github.com/Alain-RAMBELOSON/TP_POE_Frontend).

# API

## Table names

- vehicle
- customer
- rent

## Routes

Replace `<ServerAddress>` by your server address. To test this repository the recommended address is `http://localhost`.  
Replace `<TableName>` by one of the provided table name above. 

For example, to get a vehicule by its ID, your URL should look like the following
```
http://localhost:3001/api/vehicle/4334efb3d817s5ab8fe4bc28
```

### Create a record  
Use the POST method from  
`<ServerAddress>:3001/api/<TableName>`

### Get all records
Use the GET method from   
`<ServerAddress>:3001/api/<TableName>`

### Get a record by ID
Use the GET method from  
`<ServerAddress>:3001/api/<TableName>/:id`

### Update a record by ID
Use the PUT method from  
`<ServerAddress>:3001/api/<TableName>/:id`

### Delete a record by ID
Use the DELETE method from  
`<ServerAddress>:3001/api/<TableName>/:id`
