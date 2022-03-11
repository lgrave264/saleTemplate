//express router setup
const express = require('express')
const router = express.Router()

//import controllers
const {getAllTasks, updateTask, deleteTask,createTask,getTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;