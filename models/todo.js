// const mongoose = require('mongoose');
// const shortid = require('shortid');
import shortid from 'shortid'
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  created_at: { type: Date, default: new Date() },
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TodoModel = mongoose.model('todo', TodoSchema);

export default  TodoModel;