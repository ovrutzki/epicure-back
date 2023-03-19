import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IUser{
    first: string;
    last:string;
    address:string;
    phone:string;
    email:string;
    password:string;
    role:string;
    dishInCart?:object[];
    orderHistory?:object[]
}

export const userSchema = new Schema<IUser>({
    first: {type: String},
    last:{type: String},
    address:{type: String},
    phone:{type: String},
    email:{type: String,lowercase: true},
    password:{type: String},
    role:{type: String, default:"user"},
    dishInCart:{type: [Object]},
    orderHistory:{type: [[Object]]}
})

export const UserModel = mongoose.model<IUser>("users", userSchema);