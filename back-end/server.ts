import express from "express";
import "dotenv/config";
import Users from "./router/UsersRouter.ts";
import { ConnectDB } from "./config/database.ts";
const app = express();
app.use(express.json());
ConnectDB();

// Router
app.get("/", (req, res) => {
  res.send("welcome");
});
//mount routers
app.use("/api/register", Users);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}...`);
});
