import { isEnoughMoney } from '../tests.js';
import { isGameMachine } from '../tests.js';

export class User {
  constructor(name, money) {
    if (money <= 0) {
      throw new Error('The start capital must be more than 0');
    }
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
