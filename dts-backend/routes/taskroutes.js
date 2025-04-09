    const express = require('express')
    const router = express.Router();

    const {
        createTask,
         getAllTasks,
          getTaskByID,
           updateTask,
            deleteTask
    } = require('../controllers/taskcontroller');

    //create a task
    router.post('/', createTask);
    //get all tasks
    router.get('/', getAllTasks);
    //select a task
    router.get('/:id', getTaskByID)
    //update a task
    router.patch('/:id', updateTask)
    //delete a task
    router.delete('/:id', deleteTask)

    module.exports = router