const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;
require('dotenv').config();
app.use(express.json());
app.use(cors()); 
const route=require('./Routes/route')
app.use('/api/v1', route);
 
app.listen(PORT, () => { 
    console.log(`Server is Starting on ${PORT}`) 
})

const Dbconnect = require('./config/Database');  
Dbconnect(); 