#Casino
In this app we have opportunity to add user or SuperUser.
 
User can  only play game machine.

SuperUser  extended from User. He can create a casino, add game machine to casino, get money from  the casino,
 give money to casino or game machine and delete a game machine.

## How it works
<ol>
<li>
 Create a SuperUser and give him start capital. <br>  
<code>
 const admin = new SuperUser('Admin', 10000); 
</code>
</li>
<li>
Create a casino <br>  
<code>
 const lasVegas = admin.createCasino('Las Vegas'); 
</code>
</li>
<li>
Create game machine and give it money. First param is casino and second is money. <br>
<code>
const firstMachine = admin.createGameMachine(lasVegas,1000);
</code> 
</li>
<li>
Create user and give him money <br>
<code>
let player = new User('Petro', 100);
</code>
</li>
<li>
Start game. First param is money and second is game machine. <br> 
<code>
player.play(10, firstMachine);
</code>
</li>
<li>
    Receive money from casino. First param is casino and second is money. <br> 
    <code>
    admin.receiveMoney(lasVegas, 500)
    </code>
</li>
</ol>  
