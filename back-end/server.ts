import express from "express";
import "dotenv/config";
import { ConnectDB } from "./config/database.ts";
const app = express();
ConnectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}...`);
});
