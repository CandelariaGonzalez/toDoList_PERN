const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/tasks.routes')
const cors = require('cors');

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors());

app.use(taskRoutes)
app.use((err, req, res, next)=>{
    return res.status(500).json({
        message: err.message
    })
})

app.listen(4000)
console.log('server on port 4000')
