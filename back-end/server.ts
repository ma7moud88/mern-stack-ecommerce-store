import express from "express";
import "dotenv/config";

const app = express();
const port = 4000;

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}...`);
});
