//takes player list and assigns a random role from roleList to playerList
function roleSelect(playerList,roleList)
{
    roleList = roleList.toArray();
    var hold = 0;
    while (roleList.length !=  0)
    {
        hold = Math.floor((Math.random()*15));
        var index = roleList.indexOf(hold);
        if (index>-1 && hold<= roleList.length)
        {
            playerList.add(roleList.get(hold));
            roleList.splice(index, hold);
        }
    }

    return playerList;
}