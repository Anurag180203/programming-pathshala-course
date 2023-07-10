const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

// Middleware

// CORS

const app = express();

// Whitelisting
app.use(cors())

app.use(express.json())

app.use(function(req, res, next) {
    console.log("Middleware 1");
    let oldSendFunction = res.send;
    res.send = function (data) {
        console.log(data)
        if (data.error) {
            res.send = oldSendFunction
            res.send({"Error": "Something went wrong"});
        } else {
            res.send = oldSendFunction
            res.send({"Success": true})
        }
    }
    next();
    console.log("End Middleware 1")
})

//

function middle2 (req, res, next) {
    console.log("Middleware 2")
    next()
    console.log("End Middleware 2")

}
function middle4 (req, res, next) {
    console.log("Middleware 4")
    res.send({"error": "Validation failed"})
    console.log("End Middleware 4")

}


app.use('/countVowels', [middle4, middle2])

app.use(function (req, res, next) {
    console.log("Middleware 3")
    next()
    console.log("End Middleware 3")
})

//

function countVowels(name) {
    name = name.toLowerCase();
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) count++;
    }
    return count;
}

function countVowelsApi(req, res) {
    console.log(req.body)
    if (!req.query.name) {
        res.send({"error": "Name is empty"})
    }
    let name = req.query.name;
    console.log(name);
    let count = countVowels(name);
    res.send({"vowels": count});
}

function checkParity (num) {
    return num % 2 === 0 ? "even" :  "odd"; 
}

function checkParityApi (req, res) {
    let num = req.body.num;

    throw new Error("Something bad happened");
}

function insertUserToDB (name, email, college) {
    let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Ppa@123',
        database: 'tutorial'
    });

    let query = `insert into users (name, email, college) values ('${name}', '${email}', '${college}')`

    conn.query(query);

}

function addUserApi (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let college = req.body.college;
    insertUserToDB(name, email, college);
    res.status(201).send({"Success": true})
}


app.post('/checkParity', checkParityApi)


app.get('/countVowels', countVowelsApi)

app.post('/addUser', addUserApi)

// Route Params
// /users/19/courses/10

function getProgress(req, res) {
    console.log(req.params);
}

app.get('/users/:user_id/courses/:course_id', getProgress)

// Error Handling Middleware

app.use(function (err, req, res, next) {
    console.log(
        "Some unexpected error happened"
    )
    console.log(req)
    res.status(500).send({"error": "Please retry in some time"})
})

let port = 3050

app.listen(port, function() {
    console.log("I am listening");
})

// Socket - End Point of communication

// Middleware!