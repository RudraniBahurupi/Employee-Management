const express=require('express')
//Importing the Model
const PostModel=require('../models/postModel')
const router= express.Router()

router.use(express.json())

router.get('/',(req,res) => {
    res.send('Posts')
})

router.post('/', (req,res) => {
    const post=new PostModel({
        todo: req.body.todo,
        completed:req.body.completed

    })

    post.save().then(data => res.send(data))

})
module.exports=router