import { makeAutoObservable } from "mobx";
import petsData from "../petsData";
class PetStore {
  pets = petsData;
  constructor() {
    makeAutoObservable(this);
  }

  handleAdopt = (id) => {
    this.pets = this.pets.filter((pet) => +pet.id !== +id);
  };
  // PetThePet=(id)
  // this.pets=this.pets ;
}
const petStore = new PetStore();

export default petStore;
