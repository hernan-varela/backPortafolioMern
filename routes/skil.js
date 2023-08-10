const express = require('express');
const {} = require('../controller/skilController')

const api = express.Router()

api.get('/AllSkill',getAllSkil);
api.post('/addSkil',addSkil);
api.delete('/deleteSkil/:id/',deleteSkil,);
api.put('/updateProjectData/:id/',updateSkilData)

module.exports = api