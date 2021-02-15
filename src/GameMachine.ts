interface GameMachineInterface {
  getMoney(): number;
  giveMoney(money: number): number;
  receiveMoney(money: number): void;
  play(money: number): number;
}

export class GameMachine implements GameMachineInterface {
  constructor(public money: number) {}
  getMoney() {
    return this.money;
  }
  giveMoney(money) {
    this.money -= money;
    console.log(`${money}$ was got from this machine.`);
    return money;
  }
  receiveMoney(money) {
    this.money += money;
    console.log(`This machine got ${money}$`);
  }
  play(money) {
    let generatedNumber: number = Math.round(100 + Math.random() * 899);
    let numberPairs: number = new Set(generatedNumber.toString().split('')).size;
    let gameResult: number =
      numberPairs === 1 ? money * 2 : numberPairs === 2 ? money : money * -1;
    this.money += gameResult * -1;
    console.log(`Result of game: ${generatedNumber}`);
    return gameResult;
  }
}
