// Import the Express using require() module
const express = require('express');

// Initalize express app
const app = express();


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
app.get('/api', function (req,res){
    
    res.send ('Hello Wolrd! Welcome to My API')
})
//Endpoint 2
app.get('/api/users', function (req,res){

    res.json (userDate);
})
//Endpoint 3
app.get('/api/user/:id', function (req,res){

    const id = req.params.id;
    const user = userDate.find(user => user.id===id);
    if (user) {
        
        res.json(user)
    }
        else {
            
        res.send ('Users Not Found')
        
    }

})

app.listen(3000, function(){
    console.log('Server Started');
 })