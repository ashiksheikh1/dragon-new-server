const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')
const catagories = require('./data/Catagory.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('news api running')
})

app.get('/news-catagories', (req, res) => {
    res.send(catagories)
})
app.listen(port, () => {
    console.log('dragon news server', port)
})