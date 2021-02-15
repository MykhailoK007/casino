import { GameMachine } from './src/GameMachine';

export function isEnoughMoney(enteredMoney) {
  if (enteredMoney > this.money) throw new Error('Don`t enough money.');
}
export function isGameMachine(value) {
  if (!(value.constructor.name === GameMachine.name))
    throw new Error('It isn`t game machine!');
}

export function isAllowedCreateCasino() {
  if (this.casino !== null) throw new Error('You have already created casino.');
}
export function isCasinoExist() {
  if (this.casino === null)
    throw new Error("You haven't created a casino yet.");
}
export function checkStartCapital() {
  if (this.money <= 0) throw new Error('The start capital must be more than 0');
}
