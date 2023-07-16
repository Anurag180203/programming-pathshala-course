const express = require('express');
// const mysql = require("mysql2");
// const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
const app = express();
const port = 3050;

app.use(cors());
// dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const {User,Todos} = require('./database');

// let pool = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DB,
//     connectionLimit: process.env.CONN_LIM
// });

// SQL Injection - whatever is passed in the query string is executed as a query -- users may write delete queries or other malicious queries
// solutions is models - ORM - Object Relational Mapping - Sequelize
// MVC - Model View Controller - Model - DB, View - UI, Controller - API
// function insertUserToDB (name, email,password) {
//     // let query = `insert into users (name, email) values ('${name}', '${email}')`

//     // return new Promise((resolve,reject) => {
//     //     pool.query(query,(err,res) => {
//     //         if (err) reject(err);
//     //         resolve(res.insertId);
//     //     });
//     // })

//    return User.create({
//     name: name,
//     email: email,
//     password: password
//     })

// }

// async function addUserApi (req, res) {
//     console.log(req.body);
//     let name = req.body.name;
//     let email = req.body.email;
//     let password = await bcrypt.hash(req.body.password,5);
//     let response = await insertUserToDB(name, email,password);
//     res.status(201).send({"id": response.id})
// }

//epoch/unix time stamp - 1 jan 1970 00:00:00

// async function getAllUsersApi(req,res){
//     let token = req.headers.token;
//     let decoded = jwt.verify(token,"Anurag Sharma");
//     console.log("Here");
//     console.log(decoded);
//     let users = await User.findAll({
//         // where:{
//         //     id: 1
//         // }
//     });
//     res.status(200).send(users);
// }

// async function loginApi(req,res){
//     let email = req.body.email;
//     let password = req.body.password;
//     let user = await User.findOne({
//         where:{
//             email: email,
//         }
//     });
//     let matched = await bcrypt.compare(password, user.password);
//     if (matched){
//         // generate jwt token
//         const token = jwt.sign({
//             name: user.name,
//             roles: []
//         },"Anurag Sharma",{
//             expiresIn: "5m"
//         })
//         res.status(200).send({"token":token,Success:"Login Successful"});
//     }
//     else{
//         res.status(401).send({Failure:"Login Failed"});
//     }
//     // if (user){
//     //     res.status(200).send({Success:"Login Successful"});
//     // }
//     // else{
//     //     res.status(401).send({Failure:"Login Failed"});
//     // }
// }

// jwt token -- json web token -- expiry time is also set
// 1. user logs in with email and password
// 2. server checks if email and password are correct
// 3. if correct, server creates a jwt token and sends it to the user
// 4. user stores the jwt token in local storage
// 5. user sends the jwt token in the header of every request
// 6. server checks if the jwt token is valid and then sends the response

// jwt token - header, payload, signature
// header - algorithm, type
// payload - data
// signature - header + payload + secret key

// stored in local storage or cookies -- both are persistent
// local storage - not secure, can be accessed by javascript, used in client side
// cookies - secure, cannot be accessed by javascript, sent in the header of every request, used in server side

//refresh token - jwt token with no expiry time, used to generate new jwt access token when the old access one expires



// axios -- library to make http requests
// used to make http requests from the browser


// app.post('/signup', addUserApi);
// app.post('/login', loginApi);

const {getAllUsersApi} = require('./get_all_users');
const {addUserApi} = require('./add_user');
const {deleteUserApi} = require('./delete_user');
const {updateUserApi} = require('./update_user');

app.get('/getAllUsers', getAllUsersApi);
app.post('/addUser', addUserApi);
app.delete('/deleteUser', deleteUserApi);
app.put('/updateUser', updateUserApi);

app.use((err, req, res, next) => {
    console.log("Error Middleware");
    console.log(req);
    res.status(500).send("Something ridiculous went wrong");
    next();
});

app.listen(port, () => {    
    console.log(`Server listening on port ${port}`);
});