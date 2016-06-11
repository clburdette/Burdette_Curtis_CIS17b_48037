var grid = {
    aiGrid : [127,121,127,121,131,121,127,121,127],
    victory : [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
                [1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    adjacent : [[1,3,4],[0,2,5],[1,4,5],[0,4,6],
                [0,1,2,3,5,6,7,8],[2,4,8],[3,4,7],
                [4,6,8],[4,5,7]],
    corners : [0,2,6,8],
    saveEndGrid : ["N","N","N","N","N","N","N","N","N"]
};

var model = {
difficultyRandomizer : function (diff)
{
    var random = Math.floor(Math.random() * 9);
    var random2 = Math.floor(Math.random() * 3);
    if (diff == 0)
    {
	for (i = 0; i < 3; i++)
	{
            grid.aiGrid[random] += 60;
	}
    }
    else if (diff == 1)
    {
	for (i = 0; i < 3; i++)
	{
            grid.aiGrid[random] += 30;
	}
	if (random2 != 0)
	{
            model.adjustVictory();
	}
    }
    else if (diff == 2)
    {
	for (i = 0; i < 3; i++)
	{
            grid.aiGrid[random] += 10;
	}
	if (random != 0)
	{
            model.adjustVictory();
	}
    }
    else
    {
	model.adjustVictory();
    }
},
adjustVictory : function ()
{
    for (var i = 0; i < grid.victory.length; i++)
    {
        var count = 0;
	var victorySet = ["N","N","N"];
        
        for (var j = 0; j < grid.victory[i].length; j++)
        {
            var test = document.getElementById(grid.victory[i][j]);
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
            for (var k = 0; k < grid.victory[i].length; k++)
            {
                if (victorySet[k] != "X")
		{
                    grid.aiGrid[grid.victory[i][k]] += 100;
                }		
            }
        }
	if (count == 11)
	{
            for (var k = 0; k < grid.victory[i].length; k++)
            {
                if (victorySet[k] == "N")
		{
                    grid.aiGrid[grid.victory[i][k]] -= 5;
                }		
            }
        }    
        if (count == 21)
	{
            for (var k = 0; k < grid.victory[i].length; k++)
            {
                if (victorySet[k] != "O")
		{
                    grid.aiGrid[grid.victory[i][k]] += 200;
                }		
            }
        }    
    }   
},
adjustAdjacent : function ()
{
    for (var i = 0; i < grid.adjacent.length; i++)
    {
        for (var j = 0; j < grid.adjacent[i].length; j++)
        {
            var test = document.getElementById(i);
            if (test.className == "X")
            {
		for (var k = 0; k < grid.adjacent[i].length; k++)
                {
                    var test2 = document.getElementById(grid.adjacent[i][k]);
                    
                    if (test2.className == "N")
                    {
                       grid.aiGrid[grid.adjacent[i][k]] += 2; 
                    }
                }
            }
        }
    }
},
goFirstAdjust : function ()
{
    var test = document.getElementById(4);
    if (test.className == "X")
    {
	grid.aiGrid[8] += 10;
	test = document.getElementById(2);
        if (test.className == "O")
        {
            grid.aiGrid[6] -= 10;
	}
	test = document.getElementById(6);
        if (test.className == "O")
	{
            grid.aiGrid[2] -= 10;
	}
    }
    else
    {
	if (document.getElementById(1).className == "X" || document.getElementById(2).className == "X" || document.getElementById(8).className == "X")
	{
            if (document.getElementById(2).className != "O")
            {
		grid.aiGrid[6] += 20;
            }
	}
	if (document.getElementById(3).className == "X" || document.getElementById(5).className == "X" || document.getElementById(7).className == "X")
	{
            if (document.getElementById(6).className != "O")
            {
		grid.aiGrid[2] += 20;
            }
	}
	var count = 0;
	for (i = 0; i < grid.corners.length; i++)
	{
            if (document.getElementById(grid.corners[i]).className != "N")
            {
		count++;
            }
	}
	if (count > 1)
	{
            grid.aiGrid[4] += 40;
	}	
    }
}
};