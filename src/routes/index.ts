import express from "express";
import chefRouter from "./chefs.routes";
import dishRouter from "./dishes.routes";
import restaurantRouter from "./restaurant.routes";
import userRouter from "./users.routes";
import mongoose from "mongoose";

const NAMESPACE = "Server";
const router = express.Router();

router.use("/api/chefs/", chefRouter);
router.use("/api/dishes/", dishRouter);
router.use("/api/restaurants/", restaurantRouter);
router.use("/api/users/", userRouter);

export default router;
