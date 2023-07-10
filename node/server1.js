const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require("mysql2")
const app = express();
const port = 3050;

//CORS - Cross Origin Resource Sharing
// whitelisting
app.use(cors());

// app.use(express.static('public')); // for serving static files
app.use(express.json());

// for parsing application/json
app.use(bodyparser.urlencoded({ extended: true }))

//middleware


app.use((req, res, next) => {
    console.log("Middleware 1");

    if(req.body.name === "anurag"){
        res.status(401).send("Not Authorized");
    }
    else{
        console.log("Authorized");
    }

    next(); // if we use next('router') then it will skip all the middlewares and will go to the router
    console.log("End Middleware 1");
});

// app.use((req, res, next) => {   // comment it to show error handling middleware otherwise it will not show
//     console.log("Middleware 2");

//     const oldsend = res.send;
//     res.send = function(data){
//         console.log(data);
//         if(data.error){
//             console.log("Error");
//             res.send = oldsend;
//             res.send({"error":"something is wrong"});
//         }
//         else{
//             res.send = oldsend;
//             res.send({...data,"success":true});
//         }
//     }
//     next();
    
//     console.log("End Middleware 2");
// });

app.use('/check',(req, res, next) => {
    console.log("Middleware 3");
    next();
    console.log("End Middleware 3");
}); // this will get called only for /check



app.get('/', (req, res) => {
    res.send('Hello World');
});
app.post('/check', (req, res) => {
    //throw new Error("Something went wrong"); //for displaying error handling middleware uncomment it
    if(!req.body.name){
        res.send({"error":true});
    }
    else {const name = req.body.name;
    let vowels = 0;
    const vowel = ['a','e','i','o','u','A','E','I','O','U']
    for (let i = 0; i < name.length(); i++) {
        vowel.includes(name[i]) ? vowels++ : vowels;
    }
    res.send({"vowels":vowels});}
});

// error handling middleware

app.use((err, req, res, next) => {
    console.log("Error Middleware");
    console.log(req);
    res.status(500).send("Something ridiculous went wrong");
    next();
});

function insertUserToDB (name, email, college) {
    let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'An@18022003',
        database: 'anurag'
    });

    let query = `insert into user (name, email, college) values ('${name}', '${email}', '${college}')`

    conn.query(query);
    conn.end();
} //currently working synchronously, but we should make it async so that it doesn't block the event loop

function addUserApi (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let college = req.body.college;
    insertUserToDB(name, email, college);
    res.status(201).send({"Success": true})
}

app.post('/createuser', addUserApi);


app.listen(port, () => {    
    console.log(`Server listening on port ${port}`);
});