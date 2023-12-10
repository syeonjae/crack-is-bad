import express, { Request, Response, NextFunction } from "express";
import path from "path";

const endPoint = (route: string) => {
  return path.join(__dirname, "../views/html", route + ".html");
};

console.log(endPoint("about"));
const indexController = (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

const aboutController = (req: Request, res: Response) => {
  res.sendFile(endPoint("/about"));
};

const contactController = (req: Request, res: Response) => {
  res.sendFile(endPoint("/contact"));
};

export { indexController, aboutController, contactController };
