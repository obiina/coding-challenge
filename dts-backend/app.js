const express = require('express')
const cors = require('cors')
const taskroutes = require('./routes/taskroutes')

const app = express();
app.use(express.json()); //use to pass json bodies
app.use(cors());

app.use('/api/tasks', taskroutes);

module.exports = app;
