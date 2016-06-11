var view = {
prepBoard : function ()
{
    for (var i = 0; i < grid.aiGrid.length; i++)
    {
        document.getElementById(i).disabled = true;
    }
}
,
reactivateBoard : function ()
{
    for (var i = 0; i < grid.aiGrid.length; i++)
    {
        var test = document.getElementById(i);
	if (test.className == "N")
	{
            document.getElementById(i).disabled = false;
	}
    }
}
,
nuclearFinish : function ()
{
    var audio = document.getElementById("explosion");
    audio.play();
    for (var i = 0; i < grid.aiGrid.length; i++)
    {
	document.getElementById(i).setAttribute("class","D");
    }
}
,
displayFinal : function ()
{
    for (var i = 0; i < grid.saveEndGrid.length; i++)
    {
	document.getElementById(i).setAttribute("class", grid.saveEndGrid[i]);
    }	
}
,
showScore : function ()
{
    document.getElementById("playerOneScore").innerHTML = stats.playerOneScore;
    document.getElementById("playerTwoScore").innerHTML = stats.playerTwoScore;
    document.getElementById("draw").innerHTML = stats.drawScore;
}
,
showPlayerStart : function (number)
{
    if (number == 1)
    {
        document.getElementById("p1s").style.color = "green";
        document.getElementById("p2s").style.color = "black";
    }
    else
    {
        document.getElementById("p1s").style.color = "black";
	document.getElementById("p2s").style.color = "green";
    }    
}
,
showPlayers : function (number)
{
    if (number == 1)	
    {
	document.getElementById("setP1").style.color = "green";
	document.getElementById("setP2").style.color = "black";
    }
    else
    {
	document.getElementById("setP1").style.color = "black";
	document.getElementById("setP2").style.color = "green";	
    }
}
,
showDifficulty : function (number)
{
    var clr;
    for (var i = 0; i < 4; i++)
    {
        if(i == number)
        {
            clr = "green";
        }
        else
        {
            clr = "black";
        }
        document.getElementById("difficulty" + i).style.color = clr;
    }
}
,
lockButtons : function (X)
{
	document.getElementById("difficulty0").disabled = X;
	document.getElementById("difficulty1").disabled = X;
	document.getElementById("difficulty2").disabled = X;
	document.getElementById("difficulty3").disabled = X;
	document.getElementById("p1s").disabled = X;
	document.getElementById("p2s").disabled = X;
	document.getElementById("setP1").disabled = X;
	document.getElementById("setP2").disabled = X;
	document.getElementById("restart").disabled = X;
}
};

