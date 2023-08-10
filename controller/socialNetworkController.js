const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const SocialNetwork = require("../dataBase/model/SocialNetwork");

//obtener todas las redes sociales
const getAllSocialNetwork = async (req, res) => {
  try {
    const allsocNet = await SocialNetwork.find();
    if (allsocNet.length > 0) {
      res.status(201).send({ allsocNet });
    } else {
      res.status(404).send({
        message:
          "aun no se cargaron datos sobre tus redes sociales en la Base de datos",
      });
    }
  } catch (error) {
    res.status(402).send({ error: error.message });
  }
};

//agregar una red social
const addSocialNetwork = async (req, res) => {
  try {
    const { name, url, icon, description } = req.body;
    if (name && url && icon) {
      const socialNetWrk = await SocialNetwork({
        name,
        url,
        icon,
        description,
      });
      const socnetwrkStored = await socialNetWrk.save();
      res.status(201).send({ socnetwrkStored });
    } else {
      res.status(402).send({ message: "falta completar algun campo" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//elimnar red social por id
const deleteSocialNetworkById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      res.status(400).send({ message: "ID inválido" });
      return;
    }

    const dltSocntwrk = await SocialNetwork.findByIdAndDelete(id);
    if (!dltSocntwrk) {
      res
        .status(404)
        .send({
          message:
            "La red social con el ID proporcionado no existe en la base de datos",
        });
    } else {
      console.log(dltSocntwrk);
      res
        .status(200)
        .send({
          message: `La red social con ID ${id} se ha eliminado exitosamente.`,
        });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Hubo un error en el servidor" });
  }
};

module.exports = {
  getAllSocialNetwork,
  addSocialNetwork,
  deleteSocialNetworkById,
};
