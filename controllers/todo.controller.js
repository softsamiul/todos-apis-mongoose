const Todo = require("../models/todo.model")

let todo_controller = {}

todo_controller.getAllTodos = async(req, res)=>{
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    res
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
todo_controller.getSingleTodos = async(req, res)=>{
    try {
        const {id} = req.params;
        const todo = await Todo.find({_id: id})
        res.status(200).json(todo)
    res
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

todo_controller.createTodo = async(req, res)=>{
    try {
        const todo = req.body;
        const addedTodo = await Todo.create(todo);
        console.log(addedTodo)
        res.status(200).json({message: "Todo Added!", todo: addedTodo})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
todo_controller.updateTodo = async(req, res)=>{
    try {
        const {id} = req.params;
        const todo = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, todo);

        if(!updatedTodo){
            return res.status(400).json({message: "Todo not found!"})
        }
        const newTodo = await Todo.find({_id: id})
        res.status(200).json({message: "Todo Added!", todo: newTodo})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
todo_controller.deleteTodo = async(req, res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if(!deletedTodo){
            return res.status(400).json({message: "Todo not found!"})
        }
        res.status(200).json({message: "Todo deleted!", todo: deletedTodo})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = todo_controller