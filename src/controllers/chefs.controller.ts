import express, { Request, Response } from "express";
import { getChefs, removeChef, chefToAdd, updateChef } from "../services/chefs.service";

export const getAllChefs = async (req: Request, res: Response) => {
    try {
      const chefs = await getChefs();
      return res
        .status(200)
        .json(chefs);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  export const deleteChef = async (req: Request, res: Response) => {
    try {
      const chef = removeChef(req.body);
      return res.status(200).json({
        status: 200,
        data: chef,
        message: "Successfully Remove chef",
      });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  export const addingChef = async (req: Request, res: Response) => {
    const id=req.body.id;
    const name=req.body.name;
    const restaurant=req.body.restaurant;
    const age=req.body.age;
    const img=req.body.img;
    const about=req.body.about;
    try {
      const allChefs = await getChefs()
      const oldChef = allChefs.find((chefName) =>chefName.name ===name);
      if(oldChef){
        return res.status(409).send("Chef Already Exist.");
      }
      const newChef = {
        id:id,
        name:name,
        restaurant:restaurant,
        age:age,
        img:img,
        about:about
      }
      chefToAdd(newChef);
      return res.status(200).json({
        status: 201,
        data: newChef,
        message: "Successfully Create Chef",
      });
    } catch (err) {
      console.log(err);
    }
  }

  export const editChef =  async (req: Request, res: Response) => {
    try {
      const chef = updateChef(req.body._id, req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: chef,
          message: "Successfully Update chef",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  