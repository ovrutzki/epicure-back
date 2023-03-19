import express, { Request, Response } from "express";
import {
  newUser,
  getAllUsers,
  loginUser,
  validateToken,
  addDish,
  getUserCart
} from "../controllers/users.controller";
import { authCheck, UserCheck } from "../middleware/authCheck";
import extractJWT from "../middleware/extractJWT";

const userRouter = express.Router();

userRouter.get("/validate", extractJWT, validateToken);

userRouter.post("/register", newUser);

userRouter.post("/login", loginUser);

userRouter.post("/addDish", addDish);

userRouter.get("/get/all",authCheck(['admin']), getAllUsers);

userRouter.get("/getCart", getUserCart);


export default userRouter;
