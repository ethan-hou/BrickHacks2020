var Preist = {team:"Town", hp = 1, number = 0, targetTruth = 0};
var King = {team:"Town", hp = 1, number = 1, targetTruth = 0};
var Apothecary = {team:"Town", hp = 1, number = 2, targetTruth = 0};
var Knight = {team:"Town", hp = 1, number = 3, targetTruth = 0};
var Sheriff = {team:"Town", hp = 1, number = 4, targetTruth = 0};
var Watchman = {team:"Town", hp = 1, number = 5, targetTruth = 0};
var Detective= {team:"Town", hp = 1, number = 6, targetTruth = 0};
var Archer = {team: "Town", hp = 1, number = 7, targetTruth = 0}
var Jailor = {team: "Town", hp = 1, number = 8, targetTruth = 0}
var CultLead = {team: "Assassins", hp = 2, number = 9}
var Assassin = {team: "Assassins", hp = 1, number = 10}
var Framer =  {team: "Assassins", hp = 1, number = 11}
var Killer = {team: "Solo", hp = 2, number =12};
var Jester = {team: "Solo", hp = 1, number =13, targetTruth = 0};
var Executioner = {team: "Solo", hp = 2, number =14, targetTruth = 0};
var roleList = [];
var playerList = [];



//puts all roles into one array
function roleIntegration(role)
{    
    for (var j = 0; i<15; j++)
        {
            roles.push(role.number(i));
        }
    return rolesList;
}


function ability(playerNumber,number)
{
    var target = prompt("Select a target. You can only choose once.");
   switch (playerNumber.number)
   {
    case 0:
        console.log("You have decided to role block " + target);
        target.action = 0;
    case 1:
        console.log("You have decided to reveal.");
    case 2: 
        console.log("You have decided to investigate " + target);
        interrogation(target,target.truthTarget);
    case 3: 
        console.log("You have decided to guard " + target);
        target.hp += 1;
    case 4: 
        console.log("You have voted to attack " + target);
        target.hp -= 1;
    case 5: 
        console.log("You have decided to frame " + target);
        
    case 6: 
        console.log("You have deciede to heal " + target);
        target.hp += 1;
    case 7: 
        console.log("You have decided to watch " + target);
        oberserve(target);
    case 8: 
        console.log("You have decided to jail " + target);
        jail(target);
    case 9: 
        console.log("You have decided to kill " + target);
        target.hp -= 1;
    case 10:  
        console.log("You have decided to attack " + target);
        target.hp -= 1;
    case 11: 
        console.log("You have decided to attack " + target);
    case 12: 
        console.log("You have decided to frame " + target);
        framing(target);
    case 13: 
        console.log("You have decided to kill " + target);
        target.hp -= 1;
    }
}










































































'/['    

