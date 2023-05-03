const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsInfo = require('./data/chefsInfo.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Flavor is running')
});

app.get('/chefinfo', (req, res)=>{
    res.send(chefsInfo)
});

app.listen(port, ()=>{
    console.log(`Flavor fusion API is running on port: ${port}`)
})