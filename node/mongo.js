// sql databases scale by adding more powerful hardware i.e. vertical scaling while nosql databases scale by adding more servers i.e. horizontal scaling
// nosql databases are more scalable than sql databases
// nosql databases are more flexible than sql databases
// nosql databases have faster queries than sql databases
// nosql databases have a dynamic schema while sql databases have a static schema
// nosql databases are better for hierarchical data storage while sql databases are better for relational data storage
// nosql databases are better for unstructured data storage while sql databases are better for structured data storage
// nosql databases are better for large data sets while sql databases are better for small data sets
// nosql databases are better for agile development while sql databases are better for traditional development

// mongoDB is a document database
// database -> collections -> array of documents
// documents are similar to json objects
// bson or Binary JSON is a binary representation of json used by mongoDB

// odm or object document mapper is a library that maps objects to documents in a database
// mongoose is an odm for mongoDB
// mongoose provides schema validation, middleware, and other features

const express = require('express');
//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const db = require('./mongoose.js');
const Hotel = require('./mongoosemodel.js');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

// // mongoDB connection string
// const connectionString = 'mongodb://localhost:27017';

// middleware
app.use(express.json());
app.use(bodyparser.urlencoded({extended: false}));

// // create a new mongo client
// const client = new MongoClient(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// app.post('/create', async (req, res) => {
//     try {
//         // select the database
//         const db = client.db(req.body.database);

//         // create a new collection
//         const collection = db.collection(req.body.collection);

//         // create a new document
//         const obj = {
//             name:req.body.name,
//             bedrooms:req.body.bedrooms,
//             bathrooms:req.body.bathrooms,
//             rating:req.body.rating
//         };
//         const result = await collection.insertOne(obj);
//         console.log("inserted document with id: " + result.insertedId);
//         // send the result
//         res.send(result);
//     } catch (error) {
//         console.log(error);
//     }
// })

// app.get('/readbyname', async (req, res) => {
//     try{
//         const result = await client.db('zomato').collection('airbnbs').findOne({name: req.query.name});
//         console.log(result);
//         res.send(result);

//     } catch (error) {
//         console.log(error);
//     }
// });

// app.get('/readtop2rating', async (req, res) => {
//     try{
//         const result = await client.db('zomato').collection('airbnbs').find().sort({rating: -1}).limit(2).toArray();
//         console.log(result);
//         res.send(result);

//     } catch (error) {
//         console.log(error);
//     }
// });

app.post('/findandupdate', async function(req,res){
    const result = await Hotel.findOneAndUpdate({email:"abcdegff@gmail.com"},{rating:8});
    res.send(result);
});
app.post('/createnewhotel', async (req, res) => {
    try {
        const hotel = new Hotel({
            name: req.body.name,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            rating: req.body.rating,
            email: req.body.email
        });
        const result = await hotel.save();
        console.log(result);
        res.send(result);
    }
    catch (error) {
        console.log("Error by me: " + error);
        console.log(error);
    }
});

// workflow
// schema -> model -> instance -> pre -> save -> db -> post
// pre & post are middlewares used in mongoose
// pre -> generate hash password, updated at
// post -> confirmation, acknowledgement

// mysql -> aws
// mongo -> atlas

app.listen(port, async () => {
    //await client.connect();
    console.log(`Listening on port ${port}`);
});