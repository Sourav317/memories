const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const route = require('./routes/route');

dotenv.config();

//Db Connection
mongoose.connect(process.env.Db, () =>{
    console.log("Database connected");
})

app.use(express.json());
app.use(cors());
//routes
app.use('/p',route);

app.get('/',(req,res) =>{res.send('Hiiiii')})
const PORT = 4000;
app.listen(PORT, () =>{ console.log(`running on ${PORT}`)});