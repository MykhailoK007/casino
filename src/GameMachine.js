export class GameMachine {
  constructor(money) {
    this.money = money;
  }
  getMoney() {
    console.log(`${this.money}$ in this game machine`);
    return this.money;
  }
  receiveMoney(money) {
    this.money -= money;
    console.log(`${money}$ received from this machine.`);
  }
  giveMoney(money) {
    this.money += money;
    console.log(`This machine got ${money}$`);
  }
  play(money) {
    this.money += money;
    let generatedNumber = Math.round(100 + Math.random() * 899);
    let numberPairs = new Set(generatedNumber.toString().split('')).size;
    let gameResult =
      numberPairs === 1
        ? money * 3
        : numberPairs === 2
        ? money * 2
        : money * -1;
    this.money += gameResult * -1;
    console.log(`Result of game: ${generatedNumber}`);
    return gameResult;
  }
}
