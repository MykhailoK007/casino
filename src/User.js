import { isEnoughMoney, checkStartCapital, isGameMachine } from '../tests.js';

export class User {
  constructor(name, money) {
    checkStartCapital.call(this);
    this.name = name;
    this.money = money;
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
