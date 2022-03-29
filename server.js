require("dotenv").config()

const server = function() {
    const express = require('express')

    const app = express()

    app.get('/', (req, res) => {
        res.send('Hello World!')
      })

      //Using server
      app.listen(process.env.PORT, () => {
        console.log(`Example app listening at http://localhost:${process.env.PORT}`)
      })

}

module.exports = server;