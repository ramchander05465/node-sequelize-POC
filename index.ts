import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
//import "./src/sequelize/models";

require("./src/sequelize/models");

import webService from "./src/service";

const app = express();
const port = 4001;

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static('public'));
app.use("/api", webService);

app.listen(port, () => {
  console.log(`Application has started at ${port}`);
});
