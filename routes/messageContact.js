const express = require('express');
const {getAllMessageContact,addMessageContact, dltMesgContctById} = require('../controller/messageContactController')

const api = express.Router()

api.get('/allMessageContact',getAllMessageContact);
api.post('/addMessageContact',addMessageContact);
api.delete('/deleteMessageContactById/:id/',dltMesgContctById);


module.exports = api