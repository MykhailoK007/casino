import { isEnoughMoney, checkStartCapital, isGameMachine } from '../tests.js';
import { GameMachine } from './GameMachine';

export interface UserInterface {
  readonly name: string;
  money: number;
  play(money: number, b: GameMachine): void;
}
export class User implements UserInterface {
  constructor(public name: string, public money) {
    checkStartCapital.call(this);
  }
  play(money, machine) {
    isGameMachine(machine);
    isEnoughMoney.call(this, money);
    this.money += machine.play(money);
    console.log(
      `${this.name} started play with ${money}$. Your balance: ${this.money}$`
    );
  }
}
