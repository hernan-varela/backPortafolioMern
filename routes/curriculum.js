const express = require('express');
const {} = require('../controller/CurriculumController')

const api = express.Router()

api.get('/curriculum',getAllPCurriculum);
api.post('/addCurriculum',addCurriculum);
api.delete('/deleteCurriculum/:id/',deleteCurriculum,);


module.exports = api