const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express()

app.use(express.json())

app.post('/todo', (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return
    }
    res.status(200).json({
        msg : "the todo has been added"
    })
})

app.get('/todos', (req,res)=>{

})

app.put('/completed', (req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return
    }
})

