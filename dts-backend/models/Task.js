const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,

    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
    required: true
    },

    duedate: {
        type: Date,
        required: true
    }
})


module.exports = mongoose.model('Task', taskSchema)