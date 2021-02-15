import { User, UserInterface } from './User';
import { Casino } from './Casino';
import {
  isEnoughMoney,
  isAllowedCreateCasino,
  isCasinoExist,
} from '../tests.js';
import { GameMachine } from './GameMachine';

interface SuperAdminInterface extends UserInterface {
  casino: null | Casino;
  createCasino(a: string): Casino;
  createGameMachine(money: number): GameMachine;
  receiveMoney(money: number):void;
  giveMoneyForCasino(money: number):void;
  giveMoneyForMachine(machine:GameMachine, money:number):void;
  removeGameMachine(gameMachine:GameMachine):void;

}
export class SuperAdmin extends User implements SuperAdminInterface {
  casino = null;
  createCasino(name) {
    isAllowedCreateCasino.call(this);
    this.casino = new Casino(name);
    console.log(` ${this.name} created casino: ${name}`);
    return this.casino;
  }
  createGameMachine(money) {
    isCasinoExist.call(this);
    isEnoughMoney.call(this, money);
    this.money -= money;
    return this.casino.addMachine(money);
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
