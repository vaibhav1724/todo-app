const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const { default: mongoose } = require("mongoose");
const app = express()

app.use(express.json())

app.post('/todo', async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : " todo added"
    })
})

app.get('/todos',async (req,res)=>{
    todos = await todo.find({})
    res.json({
        todos 
    })
})

app.put('/completed', async (req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return
    }
    await todo.findOneAndUpdate({
        _id : req.body.id
    }, {
        completed : true
    })
    res.json({
        msg : "Todos mark as completed"
    })
    
})

app.listen(300)