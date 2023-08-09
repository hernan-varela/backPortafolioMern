require("dotenv").config();
const express = require("express");
const { appConfig, dbConfig } = require("./config");
const connectDb = require("./dataBase/index");

const app = express();

const initApp = async () => {
 try {
    await connectDb(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`server uploaded on port ${appConfig.port}`)
    );
 } catch (error) {
    console.error({error : error.message})
    process.exit(0)
 }
};

initApp()