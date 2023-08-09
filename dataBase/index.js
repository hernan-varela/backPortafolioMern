const mongoose = require("mongoose");

mongoose.connection.on('open', () => console.log('The database started correctly'))

const connectDb = async ({ host, port, name }) => {
    const uri = `mongodb://${host}:${port}/${name}`
    await mongoose.connect(uri, {useNewUrlParser : true})
};


module.exports = connectDb