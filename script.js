import { User } from './src/User.js';
import { SuperAdmin } from './src/SuperAdmin.js';

let admin = new SuperAdmin('Admin', 10000);
let lasVegas = admin.createCasino('Las Vegas');
let firstMachine = admin.createGameMachine(500);
let secondMachine = admin.createGameMachine(1000);
let player = new User('Petro', 1000);

player.play(100, firstMachine);
admin.giveMoneyForCasino(300);
lasVegas.getMachineCount();
admin.giveMoneyForCasino(400);
