import {GameMachine} from "./GameMachine.js";
import {isEnoughMoney} from "../tests.js";

export class Casino {
  constructor(name) {
    this.name = name;
    this.money = 0;
    this.machineCount = 0;
    this.machines = [];
  }
  getMoney() {
    console.log(`${this.money}$ in ${this.name} casino.`);
  }
  addMoney(money) {
    this.money += money;
  }
  getMachineCount() {
    console.log(
      `${this.machineCount} ${
        this.machineCount === 1 ? 'machine' : 'machines'
      } in ${this.name} casino`
    );
  }
  addMachine(money) {
    let newMachine = new GameMachine(money);
    this.machines.push(newMachine);
    this.machineCount++;
    this.money += money;
    this.machines.sort((a, b) => b.getMoney() - a.getMoney());
    console.log(`Added one machine to ${this.name} casino`);
    return newMachine;
  }
  receiveMoney(number) {
    isEnoughMoney.call(this,number)
    let requiredAmount = number;
    this.machines.map(machine => {
      if (requiredAmount > 0) {
        let moneyInMachine = machine.getMoney();
        let gotMoney =
          requiredAmount < moneyInMachine ? requiredAmount : moneyInMachine;
        machine.receiveMoney(gotMoney);
        this.money -= gotMoney;
        return (requiredAmount -= gotMoney);
      }
    });
    console.log(`${this.money}$ left in ${this.name} casino`);
  }
}
