function other()
{	
	if (screen1)
	{
		title.innerHTML = "Your Answers";
		button.innerHTML = "View All Answers";
		if (object.answer1 == 1)
		{
			a1.innerHTML = a11;
		}
		else
		{
			a1.innerHTML = a12;
		}
		if (object.answer2 == 1)
		{
			a2.innerHTML = a21;
		}
		else
		{
			a2.innerHTML = a22;
		}
		if (object.answer3 == 1)
		{
			a3.innerHTML = a31;
		}
		else
		{
			a3.innerHTML = a32;
		}
		
		screen1 = false;
		return screen1;
	}
	else
	{
		title.innerHTML = "All Answers";
		button.innerHTML = "View Your Answers";
		a1.innerHTML = '<div style="width:149px; float:left;">>20% :<b>'+result0+'</b></div><div style="width:149px; float:right;"><20% :<b>'+result1+'</b></div>'
		a2.innerHTML = '<div style="width:149px; float:left;">>20% :<b>'+result2+'</b></div><div style="width:149px; float:right;"><20% :<b>'+result3+'</b></div>'
		a3.innerHTML = '<div style="width:149px; float:left;">>20% :<b>'+result4+'</b></div><div style="width:149px; float:right;"><20% :<b>'+result5+'</b></div>'
		
		screen1 = true;
		return screen1;
	}
	
};
