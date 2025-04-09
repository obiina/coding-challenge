const Task = require('../models/Task')

//create a new task
exports.createTask = async(req, res) => {
    try{
        const {title, description, status, duedate} = req.body;
        //validation
        if(!title || !duedate){
            return res.status(400).json({message: "Title and Due date are required"});
        }
        const newTask = new Task({title, description, status, duedate});
        const saveTask = await newTask.save();
        return res.status(201).json(saveTask);
    }catch(error) {
        return res.status(500).json({ message: error.message });
    }
}


exports.getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
    }catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

exports.getTaskByID = async(req, res) => {
    try{
        const {id} = req.params
        const task = await Task.findById(id)
            if (!task){
                return res.status(404).json({message: 'Task not Found'});
            }
        return res.status(200).json(task)
    }catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.updateTask = async(req, res) => {
    try{
        const {id} = req.params;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            {status},
            {new: true},
        )

        if(!updatedTask){
            return res.status(404).json({message: 'Task not Found'})
        }
        return res.status(200).json(updatedTask);
    }catch (error) {
        return res.status(500).json({ message: error.message });
      }
}


exports.deleteTask = async(req, res) => {
    try{
        const {id} = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if(!deletedTask){
            return res.status(404).json({message: 'Task not Found'})
        }
        return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
    }
