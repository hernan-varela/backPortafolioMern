const express = require('express');
const {getAllProjects,addProject,deleteProject, updateProjectData} = require('../controller/projectController')

const api = express.Router()

api.get('/projects',getAllProjects);
api.post('/addProject',addProject);
api.delete('/deleteProject/:id/',deleteProject,);
api.put('/updateProjectData/:id/',updateProjectData)

module.exports = api