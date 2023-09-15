import express, { Application, json } from "express";
import cors from 'cors';
import postsRouter from "./routes/posts.routes.ts";

const app : Application = express();

app.use(json());
app.use(cors());
app.use(postsRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port 5000`);
})
