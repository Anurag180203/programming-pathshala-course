const {User} = require('./database.js');

function deleteUserFromDB (id) {
    return User.destroy({
            where:{
                "id": id
            }
    })
}

async function deleteUserApi (req, res) {
    let id = req.query.id;
    await deleteUserFromDB(id);
    res.status(201).send({"deleted": true})
}

module.exports = {
    deleteUserApi
}