import express, { Request, Response } from "express";
import usersRoutes from "./routes/usersRoutes";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Tutorial 5 Server");
});

app.use(usersRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found", success: false });
});

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error", success: false });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
