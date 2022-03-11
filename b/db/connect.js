const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://lpgra256:523256pg@task-manager-practice.enpxa.mongodb.net/Shoez?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose
.connect(connectionString)
.then(() => {console.log('CONNECTED TO MONGODB SUCCESSFUL')})
.catch((err) => {console.log(err)})
}


module.exports = connectDB