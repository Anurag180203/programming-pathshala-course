const {User} = require('./database.js');

async function getAllUsersApi(req,res){
    let users = await User.findAll({});
    console.log(users);
    res.status(200).send(users);
}

module.exports = {
    getAllUsersApi
}