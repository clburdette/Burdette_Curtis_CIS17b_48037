function grossPay(pR, hours)
{
	var grossPay;
	if (hours <= 20)
	{
		grossPay = pR * hours;
	}
	else if (hours > 20 && hours <= 40)
	{
		grossPay = (pR * 20) + (pR * (hours - 20) * 2);
	}
	else
	{
		grossPay = (pR * 20) + (pR * 40) + (pR * (hours	- 40) * 3);
	}

	return grossPay;
}

function display(payRate)
{
    var twoD=[];
    for(var rows=0;rows<=72;rows++)
    {
        twoD[rows]=[];
    }
    //Fill the array
    for(var rows=0;rows<=72;rows++)
    {
        for(var cols=0;cols<5;cols++)
	{
            if (cols === 0)
            {
                twoD[rows][cols] = rows;
            }
            else if (cols === 1)
            {
                twoD[rows][cols] = grossPay(payRate, rows);
            }
            else if (cols === 2)
            {
                twoD[rows][cols] = payRate;
            }
            else if (cols === 3)
            {
                twoD[rows][cols] = grossPay(payRate, rows) * 0.1;
            }
            else
            {
                twoD[rows][cols] = grossPay(payRate, rows) * 0.9;
            }
          
        }
    }
    //Display the table
    var str="";
    str+="<table border='1'>";
    str+="<tr><th>Hours</th><th>Gross Pay</th><th>Pay Rate</th>";
    str+="<th>Taxes 10%</th><th>Net Pay</th></tr>";
    for(var rows=0;rows<=72;rows++)
    {
        str+="<tr>";
	for(var cols=0;cols<5;cols++)
	{
            if (cols === 1 || cols === 3 || cols === 4)
            {
                str+=("<td>"+twoD[rows][cols].toFixed(2)+"</td>");
            }
            else
            {
                str+=("<td>"+twoD[rows][cols]+"</td>");
            }
	}
	str+="</tr>";
    }
    str+="</table>";
    document.write(str);
    }