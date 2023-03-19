import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/users.model";

export const authCheck = (permissions: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        let token = req.headers.authorization?.split(' ')[1] ;
        const userRole =token && JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).role;        
    if (permissions.includes(userRole)) {
        next();
    } else {
      return res.status(401).json("you don`t have permission for this action");
    }
  };
};

export const UserCheck = () =>{
  console.log("44");
  try {
    return async (req: Request, res: Response, next: NextFunction) => {
         let token = req.headers.authorization?.split(' ')[1] ;
           const userEmail =token && JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).email;
          const user = await UserModel.findOne({email:userEmail});
          console.log("zfdbzsdfb");
          
          if(userEmail === ""){
           return next()
          } else {
           return res.status(401).json("error while authorized");
         }
     }
    
  } catch (error) {
    console.log(error);
    
  }
}
