import express from "express";
import path from "path";
import createError from "http-errors";
import indexRouter from "./routes/index.route";

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// ejs css js file static set
app.use(express.static(path.join(__dirname, "views")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
app.listen(8888, () => {
  console.log(`Serve Listening at http://localhost:8888`);
});
