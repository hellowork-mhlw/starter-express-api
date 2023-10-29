const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request2!")
    res.send('Yo2!')
})
app.listen(process.env.PORT || 3000)
