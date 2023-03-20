import express, { Request, Response } from "express";
import {
  getAllDishes,
  deleteRestaurantDishes,
  deleteDish,
  addingDish,
  editDish,
} from "../controllers/dishes.controller";
import { authCheck } from "../middleware/authCheck";

const dishRouter = express.Router();

dishRouter.get("/", getAllDishes);
dishRouter.delete(
  "/delete/restaurant-dishes",
  authCheck(["admin", "chef"]),
  deleteRestaurantDishes
);
dishRouter.delete("/delete/oneDish", authCheck(["admin", "chef"]), deleteDish);
dishRouter.post("/adding", authCheck(["admin", "chef"]), addingDish);
dishRouter.post("/edit", authCheck(["admin", "chef"]), editDish);

export default dishRouter;
