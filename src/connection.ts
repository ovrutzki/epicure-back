import { connect } from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const uri = process.env.TOKEN_SECRET;

const dbName = "epicure";

export const connectToDB = async () => {
  try {
    await connect(`${uri}${dbName}`);
    console.log("db connected");
  } catch (err) {
    console.log("error connecting to DB", err);
  }
};