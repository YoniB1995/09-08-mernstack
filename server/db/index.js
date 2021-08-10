const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080 ;
const MONGO_URL= process.env.MONGO_URL ;
const CONNECTION_URL= process.env.CONNECTION_URL ;

const {getAllStudents,getStudentByName,deleteStudent} = require('../controllers/studentCtrl')
const connectToDB = ()=>{
return mongoose.connect(CONNECTION_URL,
    {
    useNewUrlParser:true,
    useUnifiedTopology: true
    })
}

connectToDB().then(()=>
{
    console.log('MongoDB Connected');
})
.catch(error=> 
    console.error('Connection error',error.message)
)

const connect = db.db('test');
db.createCollection('mongoCollection');

const db = mongoose.connection;
module.exports = db;