var difficultyLevel = 1;
var playerOneScore = 0;
var playerTwoScore = 0;
var drawScore = 0;
var numberOfPlayers = 1;
var playerOneTurn = true;
var playerOneFirst = true;
var aiGrid = [127,121,127,121,131,121,127,121,127];
var victory1 = [0,1,2];
var victory2 = [3,4,5];
var victory3 = [6,7,8];
var victory4 = [0,3,6];
var victory5 = [1,4,7];
var victory6 = [2,5,8];
var victory7 = [0,4,8];
var victory8 = [2,4,6];
var allVictory = [victory1,victory2,victory3,victory4,victory5,victory6,victory7,victory8];
var adjacent0 = [1,3,4];
var adjacent1 = [0,2,5];
var adjacent2 = [1,4,5];
var adjacent3 = [0,4,6];
var adjacent4 = [0,1,2,3,5,6,7,8];
var adjacent5 = [2,4,8];
var adjacent6 = [3,4,7];
var adjacent7 = [4,6,8];
var adjacent8 = [4,5,7];
var allAdjacent = [adjacent0,adjacent1,adjacent2,adjacent3,adjacent4,adjacent5,adjacent6,adjacent7,adjacent8]
var corners = [0,2,6,8];
var saveEndGrid = ["N","N","N","N","N","N","N","N","N"];

prepBoard();
unlockButtons();
resetScore();

function difficultyRandomizer()
{
	var random = Math.floor(Math.random() * 9);
	var random2 = Math.floor(Math.random() * 3);
	if (difficultyLevel == 1)
	{
		for (i = 0; i < 3; i++)
		{
			aiGrid[random] += 60;
		}
	}
	else if (difficultyLevel == 2)
	{
		for (i = 0; i < 3; i++)
		{
			aiGrid[random] += 30;
		}
		if (random2 != 0)
		{
			adjustVictory();
		}
	}
	else if (difficultyLevel == 3)
	{
		for (i = 0; i < 3; i++)
		{
			aiGrid[random] += 10;
		}
		if (random != 0)
		{
			adjustVictory();
		}
	}
	else
	{
		adjustVictory();
	}
}
function prepBoard()
{
	for (var i = 0; i < aiGrid.length; i++)
    	{
        	document.getElementById(i).disabled = true;
    	}
}
function reactivateBoard()
{
	for (var i = 0; i < aiGrid.length; i++)
	{
		var test = document.getElementById(i);
		if (test.className == "N")
		{
			document.getElementById(i).disabled = false;
		}
	}
}
function nuclearFinish()
{
	var audio = document.getElementById("explosion");
    	audio.play();
	for (var i = 0; i < aiGrid.length; i++)
	{
		document.getElementById(i).setAttribute("class","D");
	}
}
function adjustVictory()
{
    for (var i = 0; i < allVictory.length; i++)
    {
        var count = 0;
	var victorySet = ["N","N","N"];
        
        for (var j = 0; j < allVictory[i].length; j++)
        {
            var test = document.getElementById(allVictory[i][j]);
            if (test.className == "O")
            {
		victorySet[j] = "O";
		count += 10;
            }
            else if (test.className == "X")
            {
            }
	    else
	    {
	    	count++;
	    }	
        }
        if (count == 1)
	    {
                for (var k = 0; k < allVictory[i].length; k++)
                {
                    if (victorySet[k] != "X")
		    {
			aiGrid[allVictory[i][k]] += 100;

		    }		
                }
            }
	if (count == 11)
	    {
                for (var k = 0; k < allVictory[i].length; k++)
                {
                    if (victorySet[k] == "N")
		    {
			aiGrid[allVictory[i][k]] -= 5;

		    }		
                }
            }    
        if (count == 21)
	    {
                for (var k = 0; k < allVictory[i].length; k++)
                {
                    if (victorySet[k] != "O")
		    {
			aiGrid[allVictory[i][k]] += 200;

		    }		
                }
            }    
    }   
}
function adjustAdjacent()
{
    for (var i = 0; i < allAdjacent.length; i++)
    {
        for (var j = 0; j < allAdjacent[i].length; j++)
        {
            var test = document.getElementById(i);
            if (test.className == "X")
            {
		for (var k = 0; k < allAdjacent[i].length; k++)
                {
                    var test2 = document.getElementById(allAdjacent[i][k]);
                    
                    if (test2.className == "N")
                    {
                       aiGrid[allAdjacent[i][k]] += 2; 
                    }
                }
            }
        }
    }
}
function goFirstAdjust()
{
	var test = document.getElementById(4);
            if (test.className == "X")
	    {
		aiGrid[8] += 10;
		test = document.getElementById(2);
            	if (test.className == "O")
		{
			aiGrid[6] -= 10;
		}
		test = document.getElementById(6);
            	if (test.className == "O")
		{
			aiGrid[2] -= 10;
		}
	    }
	    else
	    {
		if (document.getElementById(1).className == "X" || document.getElementById(2).className == "X" || document.getElementById(8).className == "X")
		{
			if (document.getElementById(2).className != "O")
			{
				aiGrid[6] += 20;
			}
		}
		
		if (document.getElementById(3).className == "X" || document.getElementById(5).className == "X" || document.getElementById(7).className == "X")
		{
			if (document.getElementById(6).className != "O")
			{
				aiGrid[2] += 20;
			}
		}
		var count = 0;
		for (i = 0; i < corners.length; i++)
		{
			if (document.getElementById(corners[i]).className != "N")
			{
				count++;
			}
		}
		if (count > 1)
		{
			aiGrid[4] += 40;
		}	
	    }
}
function computerMove()
{
	if(!playerOneFirst)
	{
		goFirstAdjust();
	}
	difficultyRandomizer();
    	adjustAdjacent();
	var openMove = checkOpenMove();
        document.getElementById(openMove).className = "O";
        aiGrid[openMove] = -1000;
	var audio = document.getElementById("submarine");
    	audio.play();
	reactivateBoard();
	checkEndConditions();
}

function checkOpenMove()
{
    var highest = 0;
    var highestElement = -1;
    
    for (var i = 0; i < aiGrid.length; i++)
    {
        if (aiGrid[i] > highest)
        {
            highest = aiGrid[i];
            highestElement = i;
        }
    }
    return highestElement;
}

function checkForDraw()
{
    var dCount = 0;
    
    for (var i = 0; i < aiGrid.length; i++)
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
function processMove(square)
{
    if (numberOfPlayers == 2)
    {
        if (playerOneTurn)
        {
            playerOneAction(square);
	    playerOneTurn = false;
	    checkEndConditions();
	    return true;
        }
        else
        {
            playerTwoAction(square);
	    playerOneTurn = true;
	    checkEndConditions();	
        }
    }
    else
    {
    	playerOneAction(square);
        
        if (!checkEndConditions())
        {
            	prepBoard();
		setTimeout(computerMove,1000);
        }
    }
}

function checkEndConditions()
{
    var player1Win = checkP1VictoryConditions();
    var player2Win = checkP2VictoryConditions();
    var draw = checkForDraw();
    
    if (player1Win || player2Win || draw)
    {
        endGame(player1Win,player2Win);
        return true;
    }
    else
    {
        return false;
    }
}
function playerOneAction(square)
{
    document.getElementById(square).setAttribute("class","X");
    document.getElementById(square).disabled = true;
    aiGrid[square] = -1000;	
    playerOneTurn = false;
    var audio = document.getElementById("bomber");
    audio.play();   
}
function playerTwoAction(square)
{
    document.getElementById(square).setAttribute("class","O");
    document.getElementById(square).disabled = true;
    playerOneTurn = true;
    var audio = document.getElementById("submarine");
    audio.play();    
}
function restartGame()
{
    lockButtons();
    aiGrid = [127,121,127,121,131,121,127,121,127];
    for (var i = 0; i < aiGrid.length; i++ )
    {
        document.getElementById(i).setAttribute("class","N");
        document.getElementById(i).disabled = false;
    }
    document.getElementById("p1sHead").style.borderColor = "gray";
    document.getElementById("p2sHead").style.borderColor = "gray";
    document.getElementById("drawHead").style.borderColor = "gray";	
    if (!playerOneFirst && numberOfPlayers == 1)
    {
	aiGrid = [137,121,137,121,131,121,137,121,137];
	prepBoard();
	setTimeout(computerMove,500);
    }
    else if (!playerOneFirst && numberOfPlayers == 2)
    {
	playerOneTurn = false;
    }
    else if (playerOneFirst && numberOfPlayers == 2)
    {
	playerOneTurn = true;
    }			
}
function checkP1VictoryConditions()
{
    for (var i = 0; i < allVictory.length; i++)
    {
       var xCount = 0;
        
        for (var j = 0; j < allVictory[i].length; j++)
        {
            var test = document.getElementById(allVictory[i][j]);
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

function checkP2VictoryConditions()
{
    for (var i = 0; i < allVictory.length; i++)
    {
       var oCount = 0;
        
        for (var j = 0; j < allVictory[i].length; j++)
        {
            var test = document.getElementById(allVictory[i][j]);
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
function endGame(player1Win,player2Win)
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
    for (var i = 0; i < saveEndGrid.length; i++)
    {
	saveEndGrid[i] = document.getElementById(i).className;
    }
    if (player1Win || player2Win)
    {
	setTimeout(nuclearFinish,500);
	setTimeout(displayFinal,2000);
    }
    prepBoard();
    unlockButtons();
    document.getElementById("restart").disabled = false;
    
    updateScore(player1Win,player2Win);
}

function displayFinal()
{
    for (var i = 0; i < saveEndGrid.length; i++)
    {
	document.getElementById(i).setAttribute("class", saveEndGrid[i]);
    }	
}
function updateScore(player1Win,player2Win)
{
    if (player1Win)
    {
        playerOneScore++;
    }
    else if (player2Win)
    {
        playerTwoScore++;
    }
    else
    {
        drawScore++;
    }
    
    document.getElementById("playerOneScore").innerHTML = playerOneScore;
    document.getElementById("playerTwoScore").innerHTML = playerTwoScore;
    document.getElementById("draw").innerHTML = drawScore;
}

function resetScore()
{
    playerOneScore = 0;
    playerTwoScore = 0;
    drawScore = 0;
    
    document.getElementById("playerOneScore").innerHTML = playerOneScore;
    document.getElementById("playerTwoScore").innerHTML = playerTwoScore;
    document.getElementById("draw").innerHTML = drawScore;
}
function playerStart(number)
{
	if (number == 1)
	{
		playerOneFirst = true;
		document.getElementById("p1s").disabled = true;
		document.getElementById("p2s").disabled = false;

	}
	else
	{
		playerOneFirst = false;
		document.getElementById("p1s").disabled = false;
		document.getElementById("p2s").disabled = true;
		if (numberOfPlayers == 2)
		{
			playerOneTurn= false;
		}
	}
}
function setPlayers(number)
{
	numberOfPlayers = number;
	if (number == 1)	
	{
		document.getElementById("setP1").disabled = true;
		document.getElementById("setP2").disabled = false;
	}
	else
	{
		document.getElementById("setP1").disabled = false;
		document.getElementById("setP2").disabled = true;	
	}
}
function setDifficulty(number)
{
	difficultyLevel = number;
	if (number == 1)	
	{
		document.getElementById("difficulty1").disabled = true;
		document.getElementById("difficulty2").disabled = false;
		document.getElementById("difficulty3").disabled = false;
		document.getElementById("difficulty4").disabled = false;
	}
	else if (number == 2)	
	{
		document.getElementById("difficulty1").disabled = false;
		document.getElementById("difficulty2").disabled = true;
		document.getElementById("difficulty3").disabled = false;
		document.getElementById("difficulty4").disabled = false;
	}
	else if (number == 3)	
	{
		document.getElementById("difficulty1").disabled = false;
		document.getElementById("difficulty2").disabled = false;
		document.getElementById("difficulty3").disabled = true;
		document.getElementById("difficulty4").disabled = false;
	}
	else	
	{
		document.getElementById("difficulty1").disabled = false;
		document.getElementById("difficulty2").disabled = false;
		document.getElementById("difficulty3").disabled = false;
		document.getElementById("difficulty4").disabled = true;
	}
}
function lockButtons()
{
	document.getElementById("difficulty1").disabled = true;
	document.getElementById("difficulty2").disabled = true;
	document.getElementById("difficulty3").disabled = true;
	document.getElementById("difficulty4").disabled = true;
	document.getElementById("p1s").disabled = true;
	document.getElementById("p2s").disabled = true;
	document.getElementById("setP1").disabled = true;
	document.getElementById("setP2").disabled = true;
	document.getElementById("restart").disabled = true;
}
function unlockButtons()
{
	if (playerOneFirst)
	{
		playerStart(1);
	}
	else
	{
		playerStart(2);
	}
	setPlayers(numberOfPlayers);
	setDifficulty(difficultyLevel);
}

