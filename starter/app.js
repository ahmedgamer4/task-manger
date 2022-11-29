const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const PORT = 3000

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Task Manger App')
})

app.use('/api/v1/tasks', tasks)

// !!
// It is better to wait to connect to the database 
// then launch the server 
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log('server is listening on port ', PORT))
  } catch (err) {
    console.log(err)
  }
}

start()
