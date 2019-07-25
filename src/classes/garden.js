import Troll from "./troll";
import Gnome from "./gnome";
import Creature from "./creature";

const layout = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '@', '$', , '#', '$', , , , '#'],
  ['#', '#', , , '$', '$', , '$', , '#'],
  ['#', , '$', '&', '$', , , '$', , '#'],
  ['#', , '$', , , '$', , , , '#'],
  ['#', , '$', , '$', , '$', , , '#'],
  ['#', , '$', , '$', , '$', , , '#'],
  ['#', , , , , '$', , '$', , '#'],
  ['#', , '&', '$', '$', '&', , '$', , '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
]


export default class Garden {
  constructor(layout, 
  cssId,
  id = 0,
  age = 0, 
  status = 'danger',
  gnome = null, 
  trolls = [],){
    this.id = id;
    this.age = age;
    this.cssId = cssId;
    this.status = status;
    this.gnome = gnome;
    this.trolls = trolls;
    this.pause = true;

    if(!id){
      // loop over grid to build grid property 
      this.grid = layout;
      this.grid.forEach((row, y) => row.forEach((cell, x) => {
        if(cell === '@'){
          this.gnome = new Gnome(x,y,0);
          this.grid[y][x] = this.gnome;
        }else if(cell === '&'){
          const newTroll = new Troll(x,y);
          this.trolls.push(newTroll);
          this.grid[y][x] = newTroll;
          }
      }));
    }
    console.table(this.grid);
    this.render();
    this.start();
  }

    render(){
      const root= document.getElementById(this.cssId);
      root.classList.add('garden');
      this.grid.forEach((row, y) => {
        const newRow = document.createElement('div');
        row.forEach((cell,x) => {
          const newCell = document.createElement('div');
          if(cell instanceof Creature){
            newCell.innerHTML = cell.symbol;
          }else if(cell){
            newCell.innerHTML = cell;
          }else{
            newCell.innerHTML = '&$nbsp;';
          }
          newRow.appendChild(newCell);
        })
        root.appendChild(newRow);
      });
    }

    start() {
      if(!this.paused){
        return;
      }
      this.pause = false; 
      let count = 0;
      const pause = false;
      const timer = setInterval(() => {
        if (this.pause) {
          return clearInterval(timer);
        }else{
          this.age++;
          // executeTurn();
        }
   console.log(this.age);
    count++;
}, 1000);
  }
  
   pause(){
     this.pause === true;
   }

  //  stop(){

  //  }

  //  executeTurn(){

  //  }

  //  handleMove(){

  //  }
  }

