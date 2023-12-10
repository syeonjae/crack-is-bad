import express from "express";
import {
  indexController,
  aboutController,
  contactController,
} from "./controllers/index.controller";

const app = express();

app.use(express.static(__dirname + "/views"));

app.get("/", indexController);
app.get("/about", aboutController);
app.get("/contact", contactController);

app.listen(8888);
