const express = require('express');
const {} = require('../controller/educationController')

const api = express.Router()

api.get('/allMessageContact',getAllMessageContact);
api.post('/addMessageContact',addMessageContact);
api.delete('/deleteMessageContact/:id/',deleteMessageContact,);


module.exports = api