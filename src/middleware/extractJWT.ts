import  { NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken'
import config from "../config/config";

const NAMESPACE = "auth";

 const extractJWT  = async (req: Request, res: Response, next: NextFunction) => {
     console.info(NAMESPACE, 'validated token.');
     
     let token = req.headers.authorization?.split(' ')[1];
     
    if (token){
        JWT.verify(token, config.server.token.secret, (error, decoded) =>{
            if(error){
                return res.status(404).json({
                    message: error.message,
                    error
                });
            } else {
                res.locals.jwt = decoded;
                const role = token && JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).role;
                next()
            }
        })
    } else {
        return res.status(401).json({
            message:'Unauthorized'
        });
    }
}

export default extractJWT