import { GameMachine } from './GameMachine.js';
import { isEnoughMoney } from '../tests.js';

export class Casino {
  constructor(name) {
    this.name = name;
    this.machines = [];
  }
  getTotalAmountMoney() {
    let totalAmountMoney = this.machines.reduce(
      (acum, machine) => acum + machine.getMoney(),
      0
    );
    console.log(`${totalAmountMoney}$ in ${this.name} casino.`);

    return totalAmountMoney;
  }
  addMoney(money) {
    let dividedAmount = money / this.machines.length;
    this.machines.map(machine => (machine.money += dividedAmount));
  }
  getMachineCount() {
    console.log(
      `${this.machines.length} ${
        this.machines.length === 1 ? 'machine' : 'machines'
      } in ${this.name} casino`
    );
  }
  addMachine(money) {
    let newMachine = new GameMachine(money);
    this.machines.push(newMachine);
    this.machines.sort((a, b) => b.getMoney() - a.getMoney());
    console.log(`Added one machine to ${this.name} casino`);
    return newMachine;
  }
  giveMoney(number) {
    isEnoughMoney.call(this, number);
    let requiredAmount = number;
    this.machines.map(machine => {
      if (requiredAmount > 0) {
        let moneyInMachine = machine.getMoney();
        let gotMoney =
          requiredAmount < moneyInMachine ? requiredAmount : moneyInMachine;
        machine.giveMoney(gotMoney);
        return (requiredAmount -= gotMoney);
      }
    });
    console.log(`${this.getTotalAmountMoney()}$ left in ${this.name} casino`);
  }
  removeGameMachine(gameMachine) {
    if (this.machines.length === 1) {
      let amount = gameMachine.getMoney();
      this.machines = [];
      return amount;
    }
    this.machines = this.machines.filter(machine => machine !== gameMachine);
    let dividedMoney = gameMachine.getMoney() / this.machines.length;
    this.machines.map(machine => machine.giveMoney(dividedMoney));
    console.log('One machine was removed');
    return 0;
  }
}
