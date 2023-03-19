import express, { Request, Response } from "express";
import {
  getAllRestaurants,
  deleteRestaurant,
  addingRestaurant,
  editRestaurant,
} from "../controllers/restaurants.controller";
import { authCheck } from "../middleware/authCheck";
import extractJWT from "../middleware/extractJWT";

const restaurantRouter = express.Router();

restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.delete("/", authCheck(["admin", "chef"]), deleteRestaurant);
restaurantRouter.post(
  "/adding",
  authCheck(["admin", "chef"]),
  addingRestaurant
);
restaurantRouter.post("/edit", authCheck(["admin", "chef"]), editRestaurant);

export default restaurantRouter;
