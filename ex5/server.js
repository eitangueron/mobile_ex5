const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
// const bodyParser = require('body-parser'); 
// app.use(bodyParser.json());

const tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))

app.get('/', (req, res) => {
    res.send('Welcome to Eitan\'s server!')
})

app.get('/tasks', (req, res) => {
    res.send(tasks)
})

app.listen(port, () => {
    console.log(`server up and running on port ${port}`)
})