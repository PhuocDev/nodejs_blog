const express = require('express')
const app = express()
const port = 3000
    //route
app.get('/phuoc', (req, res) => {
    res.send('Hello World! This is phước')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(1 + 2);
})