import express, { Request, Response } from "express";
import { getDishes, removeRestaurantDishes, removeDish, dishToAdd, updateDish } from "../services/dishes.service";

export const getAllDishes = async (req: Request, res: Response) => {
    try {
      const dishes = await getDishes();
      return res
        .status(200)
        .json(dishes);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  export const deleteRestaurantDishes = async (req: Request, res: Response) => {
    try {
      const dishes = removeRestaurantDishes(req.body)
      return res
      .status(200)
      .json({
        status: 200,
        data: dishes,
        message: "Successfully Remove restaurant Dishes",
      });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
  };

  export const deleteDish = async (req: Request, res: Response) => {
    try {
      const dish = removeDish(req.body)
      return res
      .status(200)
      .json({
        status: 200,
        data: dish,
        message: "Successfully Remove dish",
      });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
  };

  export const addingDish = async (req: Request, res: Response) => {
    const id=req.body.id;
    const name=req.body.name;
    const restaurantId=req.body.restaurantId;
    const chef=req.body.chef;
    const rating=req.body.rating;
    const time=req.body.time;
    const about=req.body.about;
    const price=req.body.price;
    const allergan=req.body.allergan;
    const icons=req.body.icons;
    const sides=req.body.sides;
    const changes=req.body.changes;
    const img=req.body.img;
   try {
    const allDishes = await getDishes()
    const oldDish = allDishes.find((dish) =>dish.name === name);
    if(oldDish){
      return res.status(409).send("Dish Already Exist.");
    }
    const newDish ={
      id:id,
      name:name,
      restaurantId:restaurantId,
      chef:chef,
      rating:rating,
      time:time.split(","),
      about:about,
      price:price,
      allergan:allergan,
      icons:icons.split(","),
      sides:sides.split(","),
      changes:changes.split(","),
      img:img
    }
    dishToAdd(newDish);
    return res.status(200).json({
      status: 201,
      data: newDish,
      message: "Successfully Create Dish",
    });
  } catch (err){
   
  }
}
export const editDish =  async (req: Request, res: Response) => {
  const id=req.body.id;
    const name=req.body.name;
    const restaurantId=req.body.restaurantId;
    const chef=req.body.chef;
    const rating=req.body.rating;
    const time=req.body.time;
    const about=req.body.about;
    const price=req.body.price;
    const allergan=req.body.allergan;
    const icons=req.body.icons;
    const sides=req.body.sides;
    const changes=req.body.changes;
    const img=req.body.img;
  try {
    const newDishData = {
      id:id,
      name:name,
      restaurantId:restaurantId,
      chef:chef,
      rating:rating,
      time:time.split(","),
      about:about,
      price:price,
      allergan:allergan,
      icons:icons.split(","),
      sides:sides.split(","),
      changes:changes.split(","),
      img:img
    }
    const dish = updateDish(req.body._id, newDishData);
    return res
      .status(200)
      .json({
        status: 200,
        data: dish,
        message: "Successfully Update dish",
      });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};