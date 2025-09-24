const express = require('express')
const connectDB = require('./db')
const userRoutes = require('./userRoutes')

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', userRoutes)

app.use((req, res) => {
    res.status(404).send('404 Not Found')
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
})
