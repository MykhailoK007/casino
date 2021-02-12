import {GameMachine} from "./src/GameMachine.js";

export function isEnoughMoney( enteredMoney) {
  if (enteredMoney > this.money) throw new Error('Don`t enough money');
}
export function isGameMachine(value){
  if(value.constructor !== GameMachine.prototype.constructor) throw new Error('It isn`t game machine!');
}
