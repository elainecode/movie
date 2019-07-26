const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000 

const data = {
    'hello': 'world'
  };

app.use(cors());
app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.get('/api', (req, res) => {
    console.log(data)
    res.json(data)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))