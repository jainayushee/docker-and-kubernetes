const express = require('express')

const app = express()
const PORT = 80
app.get('/', (req, res) => {
    res.send("goodbye")
})

app.listen(PORT, ()=>{
    console.log("Running on PORT " + PORT)
})