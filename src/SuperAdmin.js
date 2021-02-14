import { User } from './User.js';
import { Casino } from './Casino.js';
import {
  isEnoughMoney,
  isAllowedCreateCasino,
  isCasinoExist,
} from '../tests.js';

export class SuperAdmin extends User {
  constructor(...props) {
    super(...props);
    this.casino = null;
  }
  createCasino(name) {
    isAllowedCreateCasino.call(this);
    this.casino = new Casino(name);
    console.log(` ${this.name} created casino: ${name}`);
    return this.casino;
  }
  createGameMachine(number) {
    isCasinoExist.call(this);
    isEnoughMoney.call(this, number);
    this.money -= number;
    return this.casino.addMachine(number);
  }
  receiveMoney(money) {
    this.casino.giveMoney(money);
    this.money += money;
    console.log(`Your balance: ${this.money}$`);
  }
  giveMoneyForCasino(money) {
    isEnoughMoney.call(this, money);
    this.casino.addMoney(money);
    this.money -= money;
  }
  giveMoneyForMachine(machine, money) {
    machine.receiveMoney(money);
    this.money -= money;
  }
  removeGameMachine(gameMachine) {
    this.money += this.casino.removeGameMachine(gameMachine);
    console.log(`Your balance: ${this.money}$`);
  }
}
