function jailed (target)

function investigation (target, targetTruth)
{
    if (target.targetTruth == 0){
        if(target.role == 10 || target.role == 7)
            return "Archer or Assassin"
        else if(target.role == 8)
            return "Jailor";
        else if(target.role == 13 || target.role == 11 || target.role == 4)
            return "Framer, Jester, or Sheriff";
        else if(target.role == 2 || target.role == 12)
            return "Apothecury or Killer";
        else if(target.role == 3 || target.role == 9)
            return "Knight or Cult Leader";
        else if(target.role == 0 || target.role == 1)
            return "Preist or King";
        else if(target.role == 5 || target.role == 6 || target.role == 15)
            return("Detective, Lookout, or Executioner") 
    }
    else
        return "Framer, Jester, or Sheriff";
}



function interrogation (target, targetTruth)
{
    if (target.targetTruth == 0){
        if(target.role >=11 && target.role <= 13)
            return "Your target is suspiscious!"
        else 
            return "Your target is not suspiscious."
    }
    else if(target.targetTruth == 1)
        return "Your target is suspiscious!";
}


function framing (target)
{
    var framed = 1;
    return framed;
}


function observe (target)
{
    //unsure how to do this one
}
