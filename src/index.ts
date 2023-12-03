import * as express from "express";
const PORT = 8887;
const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("start");
});

app.listen(PORT, () => console.log(`server start at ${PORT}`));
