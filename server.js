const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log('Time:', new Date().toISOString())
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.json())

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}!`)
})

app.post('/data', (req, res) => {       
    const receivedData = req.body
    res.json(receivedData)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
