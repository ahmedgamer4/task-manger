const mongoose = require('mongoose')

const url = process.env['MONGO_URI']

const connectDB = (url) => {
  return mongoose.connect(url)
  .then(() => console.log('CONNECTED TO MONGODB.....'))
  .catch(err => console.log(err))
}

module.exports = connectDB