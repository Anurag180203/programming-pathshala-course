//REST API -- state transfer
//frontend -> backend -> database

//types of db based on data model
// graph db (neo4j, arango db)
// document db (mongo db, couch db)
// key value db (redis, memcache)
// relational db (mysql, postgresql, oracle, sql server)
// time series db (influx db, prometheus)

const dotenv = require('dotenv');
const {Sequelize,DataTypes} = require('sequelize');
 
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0
        }
    }
)

const User = sequelize.define('users', {
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    password:{
        type: DataTypes.STRING
    }
})

const Todo = sequelize.define('todos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_name:{
        type: DataTypes.STRING
    },
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: "users",
            key: 'id'
        }
    }
})

User.hasMany(Todo);


sequelize.sync().then(() => {
    console.log("Tables synced");
})


sequelize.authenticate().then(() => {
    console.log("Connection established");
})

module.exports = {
    User,
    Todo,
    sequelize
}