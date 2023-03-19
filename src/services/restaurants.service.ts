import { IRestaurant, RestaurantsModal } from "../models/restaurants.model";

export const getRestaurants = async () => {
  try {
    const Restaurants = await RestaurantsModal.find();
    return Restaurants;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const removeRestaurant = async (restId: number) => {
  try {
    await RestaurantsModal.findByIdAndDelete(restId);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const restaurantToAdd = async (newRest: IRestaurant) => {
  try {
    const _newRest = new RestaurantsModal(newRest);
    await _newRest.save();
    return _newRest;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateRestaurant =  async (_id:string, rest:IRestaurant) => {
  try {
   const _rest =  await RestaurantsModal.findByIdAndUpdate(_id, rest);
   if(_rest){
    return (_rest)
   }
  } catch (err) {
    console.log(err);
    throw err;
  }
};