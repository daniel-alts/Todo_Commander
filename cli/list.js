// const TodoService = require('../services/todo');
import TodoService from '../services/todo.js'
import chalk from 'chalk';

const list = async () => {
    const todos = await TodoService.list();

    if (todos.length === 0) {
        console.log('No TODOs found');
        process.exit(0);
    }

    console.log('Your TODO list: ');
    todos.forEach((todo) => {
        if (todo.completed) {
            console.log('--->', chalk.strikethrough(todo.text));
        } else {
            console.log(chalk.yellow('--->',todo.text));
        }
    });
    process.exit(0);
}

// module.exports = list
export default list