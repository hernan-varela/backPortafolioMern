const express = require('express');
const {} = require('../controller/educationController')

const api = express.Router()

api.get('/education',getAllProjects);
api.post('/addEducation',addProject);
api.delete('/deleteEducation/:id/',deleteEducation,);
api.put('/updateEducationData/:id/',updateEducationData)

module.exports = api