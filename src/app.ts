import express, { Application, json } from "express";
import "express-async-errors";
import cors from 'cors';
import postsRouter from "./routes/posts.routes";

const app : Application = express();

app.use(cors());
app.use(json());
app.use(postsRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
})
