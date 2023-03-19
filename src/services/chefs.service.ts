import { ChefsModal, IChef } from "../models/chefs.model";

export const getChefs = async () => {
    try {
      const Chefs = await ChefsModal.find();
      return Chefs;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  
  export const removeChef = async (chefId: number) => {
    try {
      await ChefsModal.findByIdAndDelete(chefId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const chefToAdd = async (newChef: IChef) => {
    try {
      const _newChef = new ChefsModal(newChef);
      await _newChef.save();
      return _newChef;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const updateChef =  async (_id:string, chef:IChef) => {
    try {
     const _chef =  await ChefsModal.findByIdAndUpdate(_id, chef);
     if(_chef){
      return (_chef)
     }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  