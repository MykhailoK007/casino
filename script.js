import {User} from './src/User.js';
import {SuperAdmin} from './src/SuperAdmin.js';



let admin = new SuperAdmin('Petro', 10000);
let lasVegas = admin.createCasino('Las Vegas');
let firstMachine = admin.createGameMachine(lasVegas,500);
let player = new User('Petro', 1000);

player.play(100,firstMachine)

admin.receiveMoney(lasVegas,300);


