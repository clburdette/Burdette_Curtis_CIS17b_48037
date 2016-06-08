function setLocalStor()
{
	var str=JSON.stringify(users);
	var object=JSON.parse(str);
	var lsObj=localStorage;
	lsObj.clear();
	lsObj.setItem("users", str);
}
            