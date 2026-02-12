import mongoose from "mongoose";

export const ConnectDB = () => {
  const URLDB = process.env.DB_URL;
  if (!URLDB) {
    throw new Error("DB_URL undefined");
  }
  mongoose.connect(URLDB).then((conn) => {
    console.log(`Database Connected ${conn.connection.host}`);
  });
};
