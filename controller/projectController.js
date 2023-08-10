const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Project = require("../dataBase/model/Project");


//retorna todos los proyectos
const getAllProjects = async (req, res) => {
  try {
    const allProject = await Project.find();
    if (allProject.length > 0) {
      res.status(201).send({ allProject });
    } else {
      res.status(404).send({ message: "aun no hay proyectos en la Base de datos" });
    }
  } catch (error) {
    res.status(402).send({ error: error.message });
  }
};


//metodo para agregar proyecto
const addProject = async (req, res) => {
  try {
    const { title, description, usedTechnology, Images, link, linkGit } =
      req.body;
    if (title && description && usedTechnology && Images && link && linkGit) {
      const proyect = await Project({
        title,
        description,
        usedTechnology,
        Images,
        link,
        linkGit,
      });
      const proyectStored = await proyect.save();
      res.status(201).send({ proyectStored });
    } else {
      res.status(402).send({ message: "falta completar algun campo" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//elimina Proyecto por id
const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        if (!ObjectId.isValid(id)) {
            res.status(400).send({ message: "ID inválido" });
            return;
        }

        const projectDel = await Project.findByIdAndDelete(id);
        if (!projectDel) {
            res.status(404).send({ message: "El proyecto con el ID proporcionado no existe en la base de datos" });
        } else {
            console.log(projectDel);
            res.status(200).send({ message: `El proyecto con ID ${id} se ha eliminado exitosamente.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un error en el servidor" });
    }
};


//actualizar los datos del proyecto
const updateProjectData = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body; // Datos actualizados que se obtienen del cuerpo de la solicitud

    try {
        if (!ObjectId.isValid(id)) {
            res.status(400).send({ message: "ID inválido" });
            return;
        }

        const projectData = await Project.findById(id);
        if (!projectData) {
            res.status(404).send({ message: "El proyecto con el ID proporcionado no existe en la base de datos" });
            return;
        }

        // Actualizar los campos del proyectoData con los valores de updatedData si están presentes
        if (updatedData.title !== undefined) {
            projectData.title = updatedData.title;
        }
        if (updatedData.description !== undefined) {
            projectData.description = updatedData.description;
        }
        if (updatedData.usedTechnology !== undefined) {
            projectData.usedTechnology = updatedData.usedTechnology;
        }
        if (updatedData.Images !== undefined) {
            projectData.Images = updatedData.Images;
        }
        if (updatedData.link !== undefined) {
            projectData.link = updatedData.link;
        }
        if (updatedData.linkGit !== undefined) {
            projectData.linkGit = updatedData.linkGit;
        }

        // Guardar los cambios en la base de datos
        await projectData.save();

        console.log(projectData)
        res.status(200).send({ message: `El proyecto con ID ${id} se ha actualizado exitosamente.` });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un error en el servidor" });
    }
};





module.exports = {
 getAllProjects,
  addProject,
  deleteProject,
  updateProjectData
};
