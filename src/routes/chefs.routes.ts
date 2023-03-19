import express, { Request, Response } from "express";
import {
  getAllChefs,
  deleteChef,
  addingChef,
  editChef,
} from "../controllers/chefs.controller";
import { authCheck } from "../middleware/authCheck";
import extractJWT from "../middleware/extractJWT";

const chefRouter = express.Router();

chefRouter.get("/", getAllChefs);
chefRouter.delete("/", authCheck(["admin", "chef"]), deleteChef);
chefRouter.post("/adding", authCheck(["admin", "chef"]) , addingChef);
chefRouter.post("/edit", authCheck(["admin", "chef"]), editChef);

export default chefRouter;
