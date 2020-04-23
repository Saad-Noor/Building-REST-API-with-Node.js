// Import the Express using require() module
const express = require('express');

// Initalize express app
const app = express;

// Initalize express app

const userDate = [
{
    id: 1,
    name: 'Saad',
    age: '28'
},

{
    id: 2,
    name: 'Muhammad',
    age: '25'

},

{
    id: 3,
    name: 'Noor',
    age: '30'

},
    
];

// Create Endpoints for API

//Endpoint 1
app.get ('/api', function (req,res){
    
    res.send ('Hello Wolrd! Welcome to My API')
})
//Endpoint 2
app.get ('/api/users', function (req,res){

    res.json (userDate);
})
//Endpoint 3
app.get ('/api/users/:id', function (req,res){


})