const express=require("express")
const mongoose=require("mongoose")
const app=express()
const PORT=process.env.PORT || 5000
const {MONGOURI} =require('./config/keys')
app.use(express.json())

const db="mongodb://localhost:27017/myfullstackapp"

mongoose.connect(MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(console.log("Connected to mongoDB"))
.catch(err=>console.log(err))

const todoSchema=new mongoose.Schema({ 
    title:String,
    dueDate:String,
    priority:String,
    complete:{
        type:Boolean,
        default:false
    }
})

const Todo=mongoose.model("todo",todoSchema)

app.get("/todos",(req,res)=>{
    Todo.find().then(todo=>res.json(todo))
})

app.post("/todos",(req,res)=>{
    const newTodo= new Todo({
        title:req.body.title,
        dueDate:req.body.dueDate,
        priority:req.body.priority
    })
    newTodo.save().then(todo=>res.json(todo))
})

app.delete("/todos/:id",(req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json({remove:true}))
})
//09IBgeaOTetXR7bG
if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
console.log("server is running at port ", PORT)
})