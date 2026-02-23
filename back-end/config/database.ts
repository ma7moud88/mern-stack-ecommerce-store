import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const URL_DB = process.env.DB_URL;
    if (!URL_DB) {
      throw new Error("DB_URL undefined");
    }
    const conn = await mongoose.connect(URL_DB);
    console.log(`Database Connected:${conn.connection.host}`);
  } catch (err: any) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
