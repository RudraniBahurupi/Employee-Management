const express=require('express')
const mongoose=require('mongoose')

//Connecting to the database
mongoose.connect('mongodb+srv://Rudy:rudy123@cluster0-iafpi.mongodb.net/test?retryWrites=true&w=majority', ()=> console.log('Database Connected'))
const PostHandler=require('./routes/PostHandler')

const app=express()
app.get('/',(req,res)=>{
    res.send("Root Directory")
})
//handling routes with middleware

app.use('/posts', PostHandler)
app.listen(3000, () => console.log('server started at port 3000'))
