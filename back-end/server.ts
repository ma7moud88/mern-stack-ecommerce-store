import express from "express";
import cors from "cors";
import "dotenv/config";
import Users from "./router/UsersRouter.ts";
import { ConnectDB } from "./config/database.ts";
import { globalError } from "./MiddleWare/errorMiddleWare.ts";
const app = express();


ConnectDB();


app.use(cors({
  origin: "*",
  credentials: true // لو هتبعت كوكيز
}));

app.use(express.json());

// Router
app.get("/", (req, res) => {
  res.send("welcome");
});
//mount routers
app.use("/api/auth", Users);


// Global error handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}...`);
});
