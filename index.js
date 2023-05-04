const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsInfo = require('./data/chefsInfo.json');
const recipes = require('./data/recipes.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Flavor is running')
});

app.get('/chefinfo', (req, res)=>{
    res.send(chefsInfo)
});

app.get('/recipes', (req, res)=>{
    res.send(recipes)
});

app.get('/recipes/:id', (req, res)=>{
    const id = req.params.id;
    const selectedChef = recipes.find(n=> n.id === parseInt(id));
    console.log(selectedChef)
    res.send(selectedChef)
});

app.listen(port, ()=>{
    console.log(`Flavor fusion API is running on port: ${port}`)
})