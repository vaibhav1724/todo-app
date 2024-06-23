const mongoose = require("mongoose")
// this goes into .env file but just for the project
mongoose.connect('mongodb+srv://admin:12345@cluster0.frfluap.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {
   todo
}