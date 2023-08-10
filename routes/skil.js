const express = require('express');
const {getAllSkils, addSkil, deleteSkilById} = require('../controller/skillController')

const api = express.Router()

api.get('/AllSkill',getAllSkils);
api.post('/addSkil',addSkil);
api.delete('/deleteSkilById/:id/',deleteSkilById,);


module.exports = api