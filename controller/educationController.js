const mongoose = require("mongoose");
const Education = require("../dataBase/model/Education");
const ObjectId = mongoose.Types.ObjectId;

//obtener todos los estudios
const getAllEducation = async (req, res) => {
  try {
    const alleducations = await Education.find();
    if (alleducations.length > 0) {
      res.status(201).send({ alleducations });
    } else {
      res.status(402).send({
        message: "aun no se han guardado estudios en la base de datos",
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//agregar un estudio
const addEducation = async (req, res) => {
  try {
    const {
      institution,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      description,
    } = req.body;
    if (institution && degree && fieldOfStudy && description) {
      const curriculum = await Education({
        institution,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
        description,
      });
      const educStored = await curriculum.save();
      console.log(educStored);
      res.status(201).send({
        message: "tu estudio fue agregado a la base de datos exitosamente",
      });
    } else {
      res.status(402).send({
        message:
          "hay campos obligatorios que faltan, si  estos no se puede agregar un nuevo estudio",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};



//eliminar un estudio por id
const deleteEducationById = async (req, res) => {

    const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      res.status(400).send({ message: "ID inválido" });
      return;
    }

    const delEduc = await Education.findByIdAndDelete(id);
    if (!delEduc) {
      res.status(404).send({
        message: `El estudio con ID ${id} no existe en la base de datos`,
      });
    } else {
      console.log(delEduc);
      res.status(200).send({
        message: `El estudio con ID ${id} se ha eliminado exitosamente.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Hubo un error en el servidor" });
  }
};



//actualizar un estudio por id
const updtEducDataById = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body; // Datos actualizados que se obtienen del cuerpo de la solicitud

    try {
        if (!ObjectId.isValid(id)) {
            res.status(400).send({ message: "ID inválido" });
            return;
        }

        const educationData = await Education.findById(id);
        if (!educationData) {
            res.status(404).send({ message: "El estudio con el ID proporcionado no existe en la base de datos" });
            return;
        }
        
        // Actualizar los campos del proyectoData con los valores de updatedData si están presentes
        if (updatedData.institution !== undefined) {
            educationData.institution = updatedData.institution;
        }
        if (updatedData.degree !== undefined) {
            educationData.degree = updatedData.degree;
        }
        if (updatedData.fieldOfStudy !== undefined) {
            educationData.fieldOfStudy = updatedData.fieldOfStudy;
        }
        if (updatedData.startDate !== undefined) {
            educationData.startDate = updatedData.startDate;
        }
        if (updatedData.endDate !== undefined) {
            educationData.endDate = updatedData.endDate;
        }
        if (updatedData.description !== undefined) {
            educationData.description = updatedData.description;
        }

        // Guardar los cambios en la base de datos
        await educationData.save();

        console.log(educationData)
        res.status(200).send({ message: `El estudio con ID ${id} se ha actualizado exitosamente.` });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un error en el servidor" });
    }
};



module.exports = {
  getAllEducation,
  addEducation,
  deleteEducationById,
  updtEducDataById,
};
