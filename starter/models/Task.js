const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    // this is to make sure that there are not white
    // spaces
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

taskSchema.set('toJSON', {
  transform: (document, returnedTask) => {
    returnedTask.id = returnedTask._id.toString()
    delete returnedTask._id
    delete returnedTask.__v
  }
})

module.exports = mongoose.model('Task', taskSchema)