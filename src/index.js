const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const port = parseInt(config.port, 10);

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => console.log("Connected to mongoDB")).catch((e) => console.log("Connection Failed"));


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


