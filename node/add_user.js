const { User } = require('./database.js');
function insertUserToDB (name, college) {
   return User.create({
    name: name,
    college: college
    })

}

async function addUserApi (req, res) {
    console.log(req.body);
    let name = req.body.name;
    let college = req.body.college;
    let response = await insertUserToDB(name, college);
    res.status(201).send({"id": response.id})
}


module.exports = {
    addUserApi
}