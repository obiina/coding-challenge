const mongoose = require('mongoose')
const app = require('./app')

const MONGO_CON = 'mongodb://127.0.0.1:27017/complete-tasks'

mongoose
.connect(MONGO_CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected to MongoDB');
    app.listen(3001, () => {
        console.log('Successfully connected to MongoDB');
    })
}).catch((err) => {
    console.error('MongoDB Connection error',err)
})

