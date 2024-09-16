const express = require('express')

const app  = express()

app.use(express.urlencoded())
app.use(express.json())


port = 3000
app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})