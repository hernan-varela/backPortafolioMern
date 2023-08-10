const express = require('express');
const {getAllEducation, addEducation, deleteEducationById,updtEducDataById} = require('../controller/educationController')

const api = express.Router()

api.get('/education',getAllEducation);
api.post('/addEducation',addEducation);
api.delete('/deleteEducation/:id/',deleteEducationById,);
api.put('/updateEducationData/:id/',updtEducDataById)

module.exports = api