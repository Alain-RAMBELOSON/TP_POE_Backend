# TP_POE_Backend

# Summary

- [Description](https://github.com/Alain-RAMBELOSON/TP_POE_Backend/blob/main/README.md#description)
- [Context](https://github.com/Alain-RAMBELOSON/TP_POE_Backend/blob/main/README.md#context)
- [Personal goals](https://github.com/Alain-RAMBELOSON/TP_POE_Backend/blob/main/README.md#personal-goals)
- [Usage](https://github.com/Alain-RAMBELOSON/TP_POE_Backend/blob/main/README.md#usage)
- [API](https://github.com/Alain-RAMBELOSON/TP_POE_Backend/blob/main/README.md#api)
- [Routes](https://github.com/Alain-RAMBELOSON/TP_POE_Backend/blob/main/README.md#routes)

# Description

Backend server built with ExpressJS connected to a MongoDB Cloud database.  
This server is designed to work with the frontend application [TP_POE_Frontend](https://github.com/Alain-RAMBELOSON/TP_POE_Frontend).

# Context

Assessment for [M2i Formation](https://www.m2iformation.fr/).  
Wording provided by [Semifir](https://fr.linkedin.com/company/semifir).  

The goal is to develop a web application from scratch for a fictive car renting company in a week.  
The technologies used are up to the student.

- Create a vehicle which has a daily rent
- Create a customer
- Check the vehicle availability
- Record a start and end date for the rent
- Create a rent
- Allow the listing, editing and deletion of the vehicles, customers and rents

### [M2i Formation](https://www.m2iformation.fr/) training program

6 months on site studying the following :

**Fundamentals** : algorithmic, software architecture, unit Test and TDD, Scrum and Agile  
**Languages** : HTML, CSS, JavaScript, TypeScript, SQL  
**Frameworks** : NodeJS, Express, Angular, React, VueJS  
**Databases** : MySQL, MongoDB  
**Cloud** : AWS  
**DevTools** : Git

# Personal goals

- Think systems first not features
- Reusable, maintainable, extensible and intelligible folder and file architecture
- Set some constructs to allow multi database connection 
- Use at least one technology that I never used before  

# Usage

### Run the backend server

- Download or clone this repository
- Get the `.env` file from the repository owner and place it it into the `./src` folder 
- Open a terminal at the root of this repository 
- Run the next command to install all the dependencies 
```
npm i
```
Run the next command to run the application
```
npm start
```

### For developers

To get live updates on file changes, open a terminal at the root of this repository and run the follwing command
```
npm run dev
```
\
With [Visual Studio Code](https://code.visualstudio.com/download) and the [Rest client](https://github.com/Huachao/vscode-restclient) extension you can send requests to the database :   
- Open the `requests` folder
- Open a `*.rest` file and click on the `Send request` command which appears at the top left corner of the displayed document. 

### Run the frontend application

Run the frontend application [TP_POE_Frontend](https://github.com/Alain-RAMBELOSON/TP_POE_Frontend).

# API

## Table names

- vehicle
- customer
- rent

## Routes

Replace `<TableName>` by one of the provided table name above. 

For example, to get a vehicule by its ID, your URL should look like the following
```
http://localhost:3001/api/vehicle/4334efb3d817s5ab8fe4bc28
```

### Create a record  
Use the POST method from  
```
http://localhost:3001/api/<TableName>
```

### Get all records
Use the GET method from
```
http://localhost:3001/api/<TableName>
```

### Get a record by ID
Use the GET method from  
```
http://localhost:3001/api/<TableName>/:id
```

### Update a record by ID
Use the PUT method from  
```
http://localhost:3001/api/<TableName>/:id
```

### Delete a record by ID
Use the DELETE method from 
```
http://localhost:3001/api/<TableName>/:id
```
