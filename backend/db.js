const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:Simran100@cluster0.7nrfb.mongodb.net/TodoApp")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    Todo
}