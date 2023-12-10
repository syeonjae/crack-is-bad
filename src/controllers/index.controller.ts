import { Request, Response, NextFunction } from "express";

const indexController = (req: Request, res: Response, next: NextFunction) => {
  const data = {
    name: "Jane",
    age: 25,
  };
  res.render("index.view.ejs", data);
};

export { indexController };
