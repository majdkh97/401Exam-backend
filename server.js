const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors())
app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT

const { getDrinks, createFavorite , getFavorite ,deleteFavorite,updateFavorite} = require('./controller/drinks.controller');
const { default: axios } = require('axios');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drinks', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/drinks', getDrinks)

// CRUD endpoints

app.post('/favorite', createFavorite)
app.get('/favorite', getFavorite)
app.delete('/favorite/:idx', deleteFavorite)
app.put('/favorite/:idx', updateFavorite)



app.get('/',
    function (req, res) {
        res.send('Hello World')
    })

app.listen(PORT, () => {
    console.log('hello terminal')
})