const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const axios = require('axios')

app.use(cors())

app.get('/', (req, res) => {
    axios.get(' https://6mazwrrnbd.execute-api.us-east-1.amazonaws.com/default/hello-world-python')
      .then(function (response) {
          res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))