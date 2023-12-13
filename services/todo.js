// const Todo = require('../models/todo')
import TodoModel from '../models/todo.js'



const list = async () => {
    const todos = await TodoModel.find({})

    return todos
}

const add = async (task) => {
    const todo = new TodoModel({ text: task })
    await todo.save()
}

export default {
    list,
    add
}