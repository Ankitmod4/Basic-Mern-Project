const express = require('express');
const router = express.Router();
 
// Defining controlers
const { Create } = require('../Controllers/CreateData');
const { GetData,getByID } = require('../Controllers/GetData'); 
router.post('/createdata', Create);
router.get('/getdata/:id',getByID); 
router.get('/getdata', GetData);

module.exports = router;