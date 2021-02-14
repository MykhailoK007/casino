export class GameMachine {
  constructor(money) {
    this.money = money;
  }
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
    let generatedNumber = Math.round(100 + Math.random() * 899);
    let numberPairs = new Set(generatedNumber.toString().split('')).size;
    let gameResult =
      numberPairs === 1 ? money * 2 : numberPairs === 2 ? money : money * -1;
    this.money += gameResult * -1;
    console.log(`Result of game: ${generatedNumber}`);
    return gameResult;
  }
}
