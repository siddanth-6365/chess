import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port: number | string = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Node.js with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
