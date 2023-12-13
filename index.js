#! /usr/bin/env node

import list from './cli/list.js'
import add from './cli/add.js'
import { program } from 'commander'
import db from './db.js'

db.connect()

// list all items in the todo
program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)


// add a new item to the todo
program.command('add <task>').description('Add a new TODO task').action(add)

// mark an item as done
program.parse()
