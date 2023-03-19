import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IRestaurant{
    id:number;
    name:string;
    address:number[];
    chef:string;
    chefId:number;
    openHours:number[];
    openDays:number[];
    openYear:number
    img:string;
    dishes:number[];
    rating:string;  
}

export const restaurantSchema = new Schema<IRestaurant>({
    id: {type: Number, required:true},
    name: {type: String, required:true},
    address:[Number],
    chef:{type: String, required:true},
    chefId:{type: Number, required:true},
    openHours:[Number],
    openDays:[Number],
    openYear:{type: Number, required:true},
    img:{type: String, required:true},
    dishes:[Number],
    rating:{type: String, required:true},
    
})

export const RestaurantsModal = mongoose.model<IRestaurant>("restaurants", restaurantSchema);