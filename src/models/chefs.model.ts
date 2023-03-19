import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IChef{
    id:number;
    name:string;
    restaurant:number[];
    age:number;
    icons?:string;
    img:string;
    about:string;
}

export const chefSchema = new Schema<IChef>({
    id: {type: Number, required:true},
    name: {type: String, required:true},
    restaurant:[Number],
    age:{type: Number},
    icons:{type: String},
    img:{type: String, required:true},
    about:{type: String},
})

export const ChefsModal = mongoose.model<IChef>("chefs", chefSchema);