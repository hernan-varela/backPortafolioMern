const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Curriculum = require("../dataBase/model/Curriculum");

//agregar un nuevo curriculum
const addCurriculum = async (req, res) => {
  try {
    const { image = "", link } = req.body;
    if (link) {
      const curriculum = await Curriculum({
        image,
        link,
      });
      const curricStored = await curriculum.save();
      console.log(curricStored);
      res.status(201).send({
        message: "Se a guardado el curriculum a la base de datos exitosamente",
      });
    } else {
      res
        .status(402)
        .send({ message: "es necesario poner el link de descarga" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//eliminar curriculum por id
const deleteCurricById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      res.status(400).send({ message: "ID inválido" });
      return;
    }

    const curricDel = await Curriculum.findByIdAndDelete(id);
    if (!curricDel) {
      res.status(404).send({
        message: `El curriculum con ID ${id} no existe en la base de datos`,
      });
    } else {
      console.log(curricDel);
      res.status(200).send({
        message: `El curriculum con ID ${id} se ha eliminado exitosamente.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Hubo un error en el servidor" });
  }
};

//obtener todos los curriculums
const getAllCurriculum = async (req, res) => {
  try {
    const allCurric = await Curriculum.find();
    if (allCurric.length > 0) {
      res.status(201).send({ allCurric });
    } else {
      res.status(404).send({
        message: "aun no se han cargado la case de datos curriculums",
      });
    }
  } catch (error) {
    res.status(402).send({ error: error.message });
  }
};
module.exports = {
  getAllCurriculum,
  addCurriculum,
  deleteCurricById,
};
