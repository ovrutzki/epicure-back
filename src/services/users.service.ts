import { IUser, UserModel } from "../models/users.model";
import { Request, Response } from "express";

export const getUsers = async () => {
   const allUsers = await UserModel.find()
    .select('-password')
    .exec()
    .then(users => {
      return users
    })
    .catch((err) =>{
      console.log(err);
      throw err;
    })
  return allUsers
};

export const registerNewUser = async (user: IUser) => {
  try {
      const _user = new UserModel(user);
      await _user.save();
      return _user;
    }
   catch (err) {
    console.log(err);
    throw err;
  }
};



export const UpDateCart =  async (_id:Object, dish:Object) => {
  console.log(_id, "id");
  
  try {
   const _rest =  await UserModel.findOneAndUpdate({_id:_id}, {$push:{dishInCart:dish}})
   if(_rest){
    return (_rest)
   }
  } catch (err) {
    console.log(err);
    throw err;
  }
};


export const getUsersCart = async (user_id:Object | undefined) => {
  const userCart = await UserModel.findById(user_id)
  .select('dishInCart -_id')
   .exec()
   .then(cart => {
     return cart
   })
   .catch((err) =>{
     console.log(err);
     throw err;
   })
   
 return userCart
};

   