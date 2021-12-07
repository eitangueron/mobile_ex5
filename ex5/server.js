const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path')
// const bodyParser = require('body-parser'); 
// app.use(bodyParser.json());

// const tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))

app.get('/', (req, res) => {
    res.send('Welcome to Eitan\'s server!')
})

app.get('/files/:taskName', (req, res) => {
    const taskName = req.params.taskName
    
    fs.createReadStream(`images/${taskName}.png`).pipe(res)
    
    // fs.readFile(`images/${taskName}.png`, (err, data) => {
    //     if (err) throw err
    //     res.send(data)
    // })
})

app.listen(port, () => {
    console.log(`server up and running on port ${port}`)
})