import {User} from "./User.js";
import {Casino} from "./Casino.js";
import {isEnoughMoney} from "../tests.js";


export class SuperAdmin extends User {
  createCasino(name) {
    console.log(` ${this.name} created casino: ${name}`);
    return new Casino(name);
  }
  createGameMachine(casino, number) {
    isEnoughMoney.call(this, number);
    this.money -=number;

    return casino.addMachine(number);
  }
  receiveMoney(casino, money) {
    casino.receiveMoney(money);
    this.money += money;
  }
  giveMoneyForCasino(casino, money) {
    isEnoughMoney.call(this, money);
    casino.addMoney(money);
    this.money -= money;
  }
  giveMoneyForMachine(machine, money) {
    machine.giveMoney(money);
    this.money -= money;
  }
}
