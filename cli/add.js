// const TodoService = require('../services/todo');
import TodoService from '../services/todo.js'
import chalk from 'chalk';

const add = async (task) => {
    // validate task
    console.log('Creating TODO', task);
    await TodoService.add(task);

    console.log('TODO created successfully');

    const todos = await TodoService.list();
    todos.forEach((todo) => {
        if (todo.completed) {
            console.log(chalk.strikethrough(todo.text));
        } else {
            console.log(chalk.yellow(todo.text));
        }
    });
    process.exit(0);
}

// module.exports = add
export default add