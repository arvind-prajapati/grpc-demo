require("./alias-config")
const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("@routes/index.js");
app.use(bodyParser.json());

const port = 8080;

app.use("/api/v1", [routes]);

// application listen on port
http.listen(port, function () {
    console.log( `app listening on ${port}`);
});