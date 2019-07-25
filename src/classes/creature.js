import Coords from "./coordinates";

export default class Creature {
  constructor(x,y,hunger = 0, maxHunger = 20){
    this.coordinates = new Coords(x,y);
    this.hunger = hunger;
    this.maxHunger = maxHunger;
  }

  // getMove(grid){

  // }

  // getsTargets(grid){

  // }

  // updateLocation(){

  // }
  
  resetHunger(){
    this.hunger = 0;
  }
  
  isStarved(){
    if(this.hunger > this.maxHunger){
      return true;
    }
  }
}