const {User} = require('./database.js');

function updateUserFromDB (id, updatedVal) {
    return User.update({
        "name": updatedVal.name,
        "college": updatedVal.college
    },{
        where: {"id": id}
    })
}

async function updateUserApi (req, res) {
    let id = req.body.id;
    let updatedVal = req.body.updatedVal;
    // console.log(id, updatedVal);
    await updateUserFromDB(id, updatedVal);
    res.status(201).send({"updated": true})
}

module.exports = {
    updateUserApi
}