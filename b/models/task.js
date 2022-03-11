const mongoose = require('mongoose')

//so what is a schema
const ShoeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must Provide Your Name"],
        trim:true,
        maxlength:[20,'Name cannot exceed 20 characters']
    },
    price:{
        type:Number,
        required:[true,"Must have a price"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        maxlength:[5,'Rating cannot exceed 5']
    },
    created:{
        type:Date,
        required:[true,"Must have a date when it was created"]
    },
    company:{
        type:String,
        maxlength:[20,"Comapny name must not exceed 20"]
    },
    description:{
        type:String,
        maxlength:[100,"description cannot exceed 100 words"],
        required:[true,"must have a description"]
    }
})
//This is basic validation not advanced
module.exports = mongoose.model('Task',ShoeSchema)
