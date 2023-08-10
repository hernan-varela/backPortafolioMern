const express = require('express');
const {getAllCurriculum, addCurriculum, deleteCurricById} = require('../controller/curriculumController')

const api = express.Router()

api.get('/curriculum',getAllCurriculum);
api.post('/addCurriculum',addCurriculum);
api.delete('/deleteCurriculumById/:id/',deleteCurricById,);


module.exports = api