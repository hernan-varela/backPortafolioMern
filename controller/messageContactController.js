const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const MessageContact = require("../dataBase/model/MenssageContact");

//mostrar todos los mensajes que me dejaron
const getAllMessageContact = async (req, res) => {
  try {
    const allMsgContc = await MessageContact.find();
    if (allMsgContc.length > 0) {
      console.log({ allMsgContc });
      res.status(201).send({ allMsgContc });
    } else {
      res.status(402).send({
        message:
          "aun no se han guardado mensajes de tus contactos en la base de datos",
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//agregar un mensaje a la base de datos
const addMessageContact = async (req, res) => {
  try {
    const { nameRemit, email, message } = req.body;
    if ((nameRemit, email, message)) {
      const curriculum = await MessageContact({
        visibility: false,
        nameRemit,
        email,
        message,
      });
      const msgCntcStored = await curriculum.save();
      console.log(msgCntcStored);
      res.status(201).send({
        message: "tu mensaje se guardo exitosamnente en la base de datos",
      });
    } else {
      res.status(402).send({
        message:
          "hay campos obligatorios que faltan, sin  estos, no se puede guardar el mensaje",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//eliminar un mensaje de la base de datos por id
const dltMesgContctById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      res.status(400).send({ message: "ID inválido" });
      return;
    }

    const delmsgcont = await MessageContact.findByIdAndDelete(id);
    if (!delmsgcont) {
      res.status(404).send({
        message: `El mensaje con ID ${id} no existe en la base de datos`,
      });
    } else {
      console.log(delmsgcont);
      res.status(200).send({
        message: `El mensaje con ID ${id} se ha eliminado exitosamente.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Hubo un error en el servidor" });
  }
};

module.exports = {
  getAllMessageContact,
  addMessageContact,
  dltMesgContctById,
};
