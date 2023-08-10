require("dotenv").config();
const app = require("./app");
const { appConfig, dbConfig } = require("./config");
const connectDb = require("./dataBase/index");



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