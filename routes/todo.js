const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://ubantu:ubantu@cluster0.rgqpsg6.mongodb.net/').then(() => {
  console.log('connected to db')
}).catch(err => {
  console.log(err)
  console.log('Failed')
})


const todoSchema = mongoose.Schema({

  title: {
    type: String,
    required: [ true, "Title is required for create a todo task" ],
  },
  description: {
    type: String,
  },

});

module.exports = mongoose.model('todo', todoSchema)
