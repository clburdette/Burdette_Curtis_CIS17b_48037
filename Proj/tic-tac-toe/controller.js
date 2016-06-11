var stats = {
    difficultyLevel : 0,
    playerOneScore : 0,
    playerTwoScore : 0,
    drawScore : 0,
    numberOfPlayers : 1,
    playerOneTurn : true,
    playerOneFirst : true
};

var controller = {
computerMove : function ()
{
    if(!stats.playerOneFirst)
    {
	model.goFirstAdjust();
    }
    model.difficultyRandomizer(stats.difficultyLevel);
    model.adjustAdjacent();
    var openMove = controller.checkOpenMove();
    document.getElementById(openMove).className = "O";
    grid.aiGrid[openMove] = -1000;
    var audio = document.getElementById("submarine");
    audio.play();
    view.reactivateBoard();
    controller.checkEndConditions();
}
,
checkOpenMove : function ()
{
    var highest = 0;
    var highestElement = -1;
    
    for (var i = 0; i < grid.aiGrid.length; i++)
    {
        if (grid.aiGrid[i] > highest)
        {
            highest = grid.aiGrid[i];
            highestElement = i;
        }
    }
    return highestElement;
}
,
checkForDraw : function ()
{
    var dCount = 0;
    
    for (var i = 0; i < grid.aiGrid.length; i++)
    {
        var test = document.getElementById(i);
            if (test.className == "O" || test.className == "X")
            {
                dCount++;
            }
        if (dCount == 9)
        {
            return true;
        }
    }
}
,
processMove : function (square)
{
    if (stats.numberOfPlayers == 2)
    {
        if (stats.playerOneTurn)
        {
            controller.playerOneAction(square);
	    stats.playerOneTurn = false;
	    controller.checkEndConditions();
	    return true;
        }
        else
        {
            controller.playerTwoAction(square);
	    stats.playerOneTurn = true;
	    controller.checkEndConditions();	
        }
    }
    else
    {
    	controller.playerOneAction(square);
        
        if (!controller.checkEndConditions())
        {
            	view.prepBoard();
		setTimeout(controller.computerMove,1000);
        }
    }
}
,
checkEndConditions : function()
{
    var player1Win = controller.checkP1VictoryConditions();
    var player2Win = controller.checkP2VictoryConditions();
    var draw = controller.checkForDraw();
    
    if (player1Win || player2Win || draw)
    {
        controller.endGame(player1Win,player2Win);
        return true;
    }
    else
    {
        return false;
    }
}
,
playerOneAction : function(square)
{
    document.getElementById(square).setAttribute("class","X");
    document.getElementById(square).disabled = true;
    grid.aiGrid[square] = -1000;	
    stats.playerOneTurn = false;
    var audio = document.getElementById("bomber");
    audio.play();   
}
,
playerTwoAction : function (square)
{
    document.getElementById(square).setAttribute("class","O");
    document.getElementById(square).disabled = true;
    stats.playerOneTurn = true;
    var audio = document.getElementById("submarine");
    audio.play();    
}
,
restartGame : function ()
{
    view.lockButtons(true);
    grid.aiGrid = [127,121,127,121,131,121,127,121,127];
    for (var i = 0; i < grid.aiGrid.length; i++ )
    {
        document.getElementById(i).setAttribute("class","N");
    }
    view.reactivateBoard();
    document.getElementById("p1sHead").style.borderColor = "gray";
    document.getElementById("p2sHead").style.borderColor = "gray";
    document.getElementById("drawHead").style.borderColor = "gray";	
    if (!stats.playerOneFirst && stats.numberOfPlayers == 1)
    {
	grid.aiGrid = [137,121,137,121,131,121,137,121,137];
	view.prepBoard();
	setTimeout(controller.computerMove,500);
    }
    else if (!stats.playerOneFirst && stats.numberOfPlayers == 2)
    {
	stats.playerOneTurn = false;
    }
    else if (stats.playerOneFirst && stats.numberOfPlayers == 2)
    {
	stats.playerOneTurn = true;
    }			
}
,
checkP1VictoryConditions : function ()
{
    for (var i = 0; i < grid.victory.length; i++)
    {
       var xCount = 0;
        
        for (var j = 0; j < grid.victory[i].length; j++)
        {
            var test = document.getElementById(grid.victory[i][j]);
            if (test.className == "X")
            {
                xCount++;
            }
        }
        if (xCount == 3)
            {
                return true;
            }
    }
}
,
checkP2VictoryConditions : function ()
{
    for (var i = 0; i < grid.victory.length; i++)
    {
       var oCount = 0;
        
        for (var j = 0; j < grid.victory[i].length; j++)
        {
            var test = document.getElementById(grid.victory[i][j]);
            if (test.className == "O")
            {
                oCount++;
            }
        }
        if (oCount == 3)
            {
                return true;
            }
    }
}
,
endGame : function (player1Win,player2Win)
{
    if (player1Win)
    {
        document.getElementById("p1sHead").style.borderColor = "red";
    }
    else if (player2Win)
    {
        document.getElementById("p2sHead").style.borderColor = "blue";
    }
    else
    {
        document.getElementById("drawHead").style.borderColor = "green";
    }
    for (var i = 0; i < grid.saveEndGrid.length; i++)
    {
	grid.saveEndGrid[i] = document.getElementById(i).className;
    }
    if (player1Win || player2Win)
    {
	setTimeout(view.nuclearFinish,500);
	setTimeout(view.displayFinal,2000);
    }
    view.prepBoard();
    view.lockButtons(false);
    document.getElementById("restart").disabled = false;
    
    controller.updateScore(player1Win,player2Win);
}
,
playerStart : function (number)
{
    if (number == 1)
    {
	stats.playerOneFirst = true;
    }
    else
    {
	stats.playerOneFirst = false;
	if (stats.numberOfPlayers == 2)
	{
            stats.playerOneTurn= false;
	}
    }
    view.showPlayerStart(number);
}
,
setPlayers : function (number)
{
    stats.numberOfPlayers = number;
    view.showPlayers(number);
}
,
setDifficulty : function (number)
{
    stats.difficultyLevel = number;
    view.showDifficulty(number);
},
updateScore : function (player1Win,player2Win)
{
    if (player1Win)
    {
        stats.playerOneScore++;
    }
    else if (player2Win)
    {
        stats.playerTwoScore++;
    }
    else
    {
        stats.drawScore++;
    }
    
    view.showScore();
}
};