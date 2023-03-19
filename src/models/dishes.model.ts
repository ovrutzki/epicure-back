import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IDish{
    id:number;
    restaurantId:number;
    name:string;
    rating:string;
    time:number[];
    about:string;
    price:number;
    allergan:string[];
    icons:string[];
    sides:string[];
    changes:string[];
    img:string;
}

export const dishSchema = new Schema<IDish>({
    id: {type: Number, required:true},
    restaurantId:{type: Number, required:true},
    name: {type: String, required:true},
    rating:{type: String, required:true},
    time: [String],
    about:{type: String, required:true},
    price: {type: Number, required:true},
    allergan:[String],
    icons:[String],
    sides:[String],
    changes:[String],
    img:{type: String, required:true}
    
})

export const DishesModal = mongoose.model<IDish>("dishes", dishSchema);