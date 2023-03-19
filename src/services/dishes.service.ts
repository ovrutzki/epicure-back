import { DishesModal, IDish } from "../models/dishes.model";

export const getDishes = async () => {
    try {
      const Dishes = await DishesModal.find();
      return Dishes;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const removeRestaurantDishes = async (restId:any) => {
    const idInteger = restId.restaurantId
    try {
      await DishesModal.deleteMany({restaurantId: idInteger});
      return DishesModal.find();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const removeDish = async (dishId: number) => {
    try {
      await DishesModal.findByIdAndDelete(dishId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const dishToAdd = async (newDish: IDish) => {
    try {
      const _newDish = new DishesModal(newDish);
      await _newDish.save();
      return _newDish;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const updateDish =  async (_id:string, dish:IDish) => {
    try {
     const _dish =  await DishesModal.findByIdAndUpdate(_id, dish);
     if(_dish){
      return (_dish)
     }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };