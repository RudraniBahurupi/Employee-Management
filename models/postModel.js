const mongoose=require('mongoose')
const PostSchema=mongoose.Schema({
    todo:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
}) 
module.exports=mongoose.model('post', PostSchema)
//takes 2 params, name with which it will be stored
//in the database and the schema
