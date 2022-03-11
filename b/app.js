const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
//const {connect} = require('./routes/tasks');
require('dotenv').config();

//middleware
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(express.static('public'))

//app.use(express.static('public'))
//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manger App')
})

const port = 3000;

const start = async() => {
    try{
        await connectDB(process.env.MONOGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))
    }catch(error){
        console.log(error)
    }
}
start()