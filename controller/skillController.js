const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Skil = require("../dataBase/model/Skil");

//obtengo todas las skils
const getAllSkils = async (req, res) => {
  try {
    const allskil = await Skil.find();
    if (allskil.length > 0) {
      res.status(201).send({ allskil });
    } else {
      res.status(404).send({
        message:
          " Actualmente la base de datos  no contiene ninguna habilidad guardada",
      });
    }
  } catch (error) {
    res.status(402).send({ error: error.message });
  }
};

//elimino una skil por id
const deleteSkilById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      res.status(400).send({ message: "ID inválido" });
      return;
    }

    const DltSkil = await Skil.findByIdAndDelete(id);
    if (!DltSkil) {
      res.status(404).send({
        message:
          "la habilidad con el ID proporcionado no existe en la base de datos",
      });
    } else {
      console.log(DltSkil);
      res.status(200).send({
        message: `la habilidad con ID ${id} se ha eliminado exitosamente.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Hubo un error en el servidor" });
  }
};

//agrego una skil
const addSkil = async (req, res) => {
  try {
    const { name, image, description, level } = req.body;
    if (name && description && image && level ) {
      const skil = await Skil({
        name,
        image,
        description,
        level,
      });
      const skilStored = await skil.save();
      res.status(201).send({ skilStored });
    } else {
      res.status(402).send({ message: "falta completar algun campo" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllSkils,
  addSkil,
  deleteSkilById,
};
