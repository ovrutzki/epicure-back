import { Request, Response } from "express";
import { RestaurantsModal } from "../models/restaurants.model";
import {
  getRestaurants,
  removeRestaurant,
  restaurantToAdd,
  updateRestaurant,
} from "../services/restaurants.service";

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await getRestaurants();
    return res.status(200).json(restaurants);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = removeRestaurant(req.body);
    return res.status(200).json({
      status: 200,
      data: restaurant,
      message: "Successfully Remove restaurant",
    });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const addingRestaurant = async (req: Request, res: Response) => {
  const id = req.body.id;
  const name = req.body.name;
  const address = req.body.address;
  const chef = req.body.chef;
  const chefId = req.body.chefId;
  const openHours = req.body.openHours;
  const openDays = req.body.openDays;
  const openYear = req.body.openYear;
  const img = req.body.img;
  const dishes = req.body.dishes;
  const rating = req.body.rating;
  try {
    const allRestaurants = await getRestaurants();
    const oldRest = allRestaurants.find((restName) => restName.name === name);
    if (oldRest) {
      return res.status(409).send("Restaurant Already Exist.");
    }
    const newRest = {
      id: id,
      name: name,
      address: address,
      chef: chef,
      chefId: chefId,
      openHours: openHours,
      openDays: openDays,
      openYear: openYear,
      img: img,
      dishes: dishes,
      rating: rating,
    };
    restaurantToAdd(newRest);
    return res.status(200).json({
      status: 201,
      data: newRest,
      message: "Successfully Create Restaurant",
    });
  } catch (err) {
    console.log(err);
  }
};

export const editRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = updateRestaurant(req.body._id, req.body);
    return res.status(200).json({
      status: 200,
      data: restaurant,
      message: "Successfully Update restaurant",
    });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};
