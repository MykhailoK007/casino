import { GameMachine } from './GameMachine';
import { isEnoughMoney } from '../tests.js';
interface CasinoInterface {
  machines: GameMachine[];
  name: string;
  getTotalAmountMoney(): number;
  addMoney(money: number): void;
  getMachineCount(): void;
  addMachine(money: number): GameMachine;
  giveMoney(money: number): void;
  removeGameMachine(gameMachine: GameMachine): number;
}

export class Casino implements CasinoInterface {
  machines = [];
  constructor(public name: string) {}
  getTotalAmountMoney() {
    let totalAmountMoney: number = this.machines.reduce(
      (acum: number, machine: GameMachine) => acum + machine.getMoney(),
      0
    );
    console.log(`${totalAmountMoney}$ in ${this.name} casino.`);
    return totalAmountMoney;
  }
  addMoney(money) {
    let dividedAmount: number = money / this.machines.length;
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
    let newMachine: GameMachine = new GameMachine(money);
    this.machines.push(newMachine);
    this.machines.sort((a, b) => b.getMoney() - a.getMoney());
    console.log(`Added one machine to ${this.name} casino`);
    return newMachine;
  }
  giveMoney(money) {
    isEnoughMoney.call(this, money);
    let requiredAmount: number = money;
    this.machines.map(machine => {
      if (requiredAmount > 0) {
        let moneyInMachine = machine.getMoney();
        let gotMoney: number =
          requiredAmount < moneyInMachine ? requiredAmount : moneyInMachine;
        machine.giveMoney(gotMoney);
        return (requiredAmount -= gotMoney);
      }
    });
    console.log(`${this.getTotalAmountMoney()}$ left in ${this.name} casino`);
  }
  removeGameMachine(gameMachine) {
    if (this.machines.length === 1) {
      let amount: number = gameMachine.getMoney();
      this.machines = [];
      return amount;
    }
    this.machines = this.machines.filter(machine => machine !== gameMachine);
    let dividedMoney: number = gameMachine.getMoney() / this.machines.length;
    this.machines.map(machine => machine.giveMoney(dividedMoney));
    console.log('One machine was removed');
    return 0;
  }
}
