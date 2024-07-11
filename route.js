const express = require('express')
const { createTask, getTasks, updateTaskStatus, editTask, deleteTask, clearCompleted } = require('./taskController')
const route = express.Router()

route.post('/addTask',createTask)
route.get('/displayTask',getTasks)
route.put('/updateTaskStatus',updateTaskStatus)
route.put('/editTask',editTask)
route.delete('/deleteTask',deleteTask)
route.delete('/clearCompleted',clearCompleted)

module.exports = route