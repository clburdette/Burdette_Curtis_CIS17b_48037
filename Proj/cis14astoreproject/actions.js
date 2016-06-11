var currentCart = [];
var cartItems = 0;
var $title = "title";
var $year = "year";
var $rarity = "rarity";
var $price = "price";

function srtIndx(obj,sort)//sort function takes object to sort and attribute to sort by
	{
		var idx = obj;
                for (i = 0; i < idx.length; i++)
		{
			for (j = 1; j < idx.length; j++)
			{
				if (idx[j-1][sort] > idx[j][sort])
				{
					var temp = idx[j-1];
					idx[j-1] = idx[j];
					idx[j] = temp;
				}
			}
            	}
		return idx;
	}
function blah(sort)//pulls inventory from local storage and displays as table
                   //based on specified sort
	{         
	    var $strUser=localStorage.getItem("users");
	    var $users=JSON.parse($strUser);
	    var indx=srtIndx($users,sort);
            var $display = 15;
            var $pages;
            var $start;
            
            var $records = $users.length;
                   
            if ($records > $display) { 
                            $pages = Math.ceil ($records/$display);
                    } else {
                            $pages = 1;
                    }
            
            $start = 0;
            //header with sort buttons
            var strTab='<table cellspacing="0" cellpadding="5" width="100%">';
                strTab+='<tr>';
                    strTab+='<td align="left"><b></b></td>';
                    strTab+='<td align="left"><b></b></td>';
                    strTab+='<td align="left"><b><button onclick="blah($title);">Title</button></b></td>';
                    strTab+='<td align="left"><b><button onclick="blah($year);">Year</button></b></td>';
                    strTab+='<td align="left"><b><button onclick="blah($rarity);">Rarity</button></b></td>';
		    strTab+='<td align="left"><b><button onclick="blah($price);">Price</button></b></td>';
                strTab+='</tr>';
            //draw/redraw the table based on the sort
            var $end=$users.length;
            if($end-$start>$display)$end=$start+$display;
            var $bg = '#eeeeee';
	    var strRow = ""; 
            for (var i = $start; i < $end;i++){
                    var $usrs=indx[i];
                    $bg = ($bg=='#eeeeee' ? '#ffffff' : '#eeeeee');
                    strRow+= '<tr bgcolor="'+$bg+'">';
                            strRow+=('<td align="left"><input type="submit" title="submit" value="add to cart" onclick="addItem('+$usrs['sku']+')"></td>');
			    strRow+=('<td align="left"><img src="'+$usrs['title']+'.jpg" style="width:72px;height:80px;"></td>');
                            strRow+=('<td align="left">'+$usrs['title']+'</td>');
                            strRow+=('<td align="left">'+$usrs['year']+'</td>');
                            strRow+=('<td align="left">'+$usrs['rarity']+'</td>');
			    strRow+=('<td align="left">$'+$usrs['price']+'</td>');
                        strRow+='</tr>';
            }
            strRow+='</table>';
            document.getElementById("main").innerHTML = strTab + strRow;
	}
    
function addItem(itemNumber)//adds item to cart when selected
{
	var match = false;
        var warning = false;
        var presentCart = 0;
        var totalItems = 0;
        var carts = users;
        //check to see if item has been previously selected
        //if it has, the amount of that item in the cart increases
        for (var i = 0; i < currentCart.length; i++)
        {
            if (currentCart[i] == carts[itemNumber])
            {
                match = true;
                presentCart = i;
                if (currentCart[i].amount < 5)//limits how much of a single item
                {                             //can be selected to avoid mismatch
                    currentCart[i].amount++;  //with shopping cart selectors
                }
                else
                {
                    warning = true;
                }
            }
        } 
        //if not, sets selected item amount to default of 1
        if (!match)
        {
            currentCart[cartItems] = carts[itemNumber];
            currentCart[cartItems].amount = 1;
            presentCart = cartItems;
        }
        //tallies total items in cart
        for (var j = 0; j <currentCart.length; j++)
        {
            totalItems += currentCart[j].amount;
        }
        var subTotal = calcSubTotal();
        //draw the display
	var strRow = '<div style="padding:0px 0 0 12px">';
	strRow += '<table id="addCartItem">';
	strRow+='<tr>';
	strRow+='<td style="width:300px">';
	strRow+='<table>';
	strRow+='<tr>';
	strRow+='<td><img src="check.png" style="width:64px; height:64px;"></td>'; 
	strRow+=('<td><img src="'+currentCart[presentCart].title+'.jpg" style="width:72px;height:80px;"></td>');
        if (warning)
        {
            strRow+='<td style="color:red; text-size:1em;"><b>Item Limit 5</b></td>';
        }
        else
        {
            strRow+='<td style="color:green; text-size:1em;"><b>Added To Cart</b></td>';
        }
	strRow+='</tr>';
	strRow+='</table>';
	strRow+= '<td bgcolor="#eeeeee">';
	strRow+='<table>';
        strRow+='<tr>';
        strRow+='<td style="width:300px;">Cart Subtotal ('+totalItems+' items): $'+subTotal.toFixed(2)+'</td>';
        strRow+='<td><button id="shoppingCart" onclick="shoppingCart();"></button></td>';
	strRow+='</tr>';
        strRow+='</table>';
	strRow+='</td></tr></table>';
	strRow+='<br/><br/>';
	strRow+='<button id="return" onclick="blah();">Continue Shopping</button>';
	strRow+='</div>';
	document.getElementById("main").innerHTML = strRow;
	//expands access to next array element
        if (!match)
        {
            cartItems++;
        }
}
function signIn()//login
{       //pulls customer records from local storage
	var strCust=localStorage.getItem("customers");
        var $customers=JSON.parse(strCust);
        var usernameInput = document.getElementById("logInName").value;
	var passwordInput = document.getElementById("logInPassword").value;
	var usernameMatch = false;
	var passwordMatch = false;
	var usernameCapture;
	var passwordCapture;
        //scans customer data for username and password matches
	for (var i = 0; i < $customers.length; i++)
	{
		if (usernameInput == $customers[i].username)
		{
			usernameMatch = true;
			usernameCapture = $customers[i].username;
			passwordCapture = $customers[i].password;
		}
	}
	if (!usernameMatch)//error message for bad username
	{
		document.getElementById("logInName").setAttribute("value","not a valid user name");
	}
	else
	{
		if (passwordInput == passwordCapture)
		{
			passwordMatch = true;
		}
		if (!passwordMatch)//error message for bad password
		{
			document.getElementById("logInPassword").setAttribute("value","not a valid password");
		}
		else//sign in succesful, disable sign in
		{
			document.getElementById("signInBar").innerHTML = "&nbsp;&nbsp;&nbsp;&nbspWelcome back, " + usernameCapture + "!";
			document.getElementById("rcorners1").setAttribute("class","signedIn");
		}
	}
}	
function signUp()//add new customers
{               var nom1 = "document.getElementById('fname')";
                var nom2 = "document.getElementById('lname')"; 
                var nom3 = "document.getElementById('usernameSU')";
                var em1 = "document.getElementById('emailSU')";
                var pst1 = "document.getElementById('passSU')";
		var str = '<div style="height:50px"></div>';
                
                //draw the form table
		str += '<fieldset style="width:500px; margin:0px auto; text-align:center;">';
		str += '<br/><table>';
		str += '<tr align="center">New User Sign Up</tr>';
		str += '<tr align="left">';
		str += '<td>first name:</td>';
		str += '<td><input type="text" id="fname" name="fname" style="width:400px"><span id="redo1"></span></td>';
		str += '</tr>';
		str += '<tr align="left">';
		str += '<td>last name:</td>';
		str += '<td><input type="text" id="lname" name="lname" style="width:400px"><span id="redo2"></span></td>';
		str += '</tr>';
		str += '<tr align="left">';
		str += '<td>user name:</td>';
		str += '<td><input type="text" id="usernameSU" name="usernameSU" style="width:400px"><span id="redo3"></span></td>';
		str += '</tr>';
		str += '<tr align="left">';
		str += '<td>email:</td>';
		str += '<td><input type="text" id="emailSU" name="emailSU" style="width:400px"><span id="redo4"></span></td>';
		str += '</tr>';
		str += '<tr align="left">';
		str += '<td>password:</td>';
		str += '<td><input type="text" id="passSU" name="passSU" style="width:400px"><span id="redo5"></span></td>';
		str += '</tr>';
		str += '</table><br/>';
                //pass information to checkSignUp for validation
		str += '<button type="button" style="height: 25px; width: 100px; font-size:1em;" onclick="checkSignUp('+nom1+','+nom2+','+nom3+','+em1+','+pst1+');">submit</button>';
		str += '</fieldset><br/><br/>';
		str += '<div style="height:50px; width:500px; margin:0px auto; text-align:center;"><button type="button" style="height: 25px; width: 100px; font-size:1em;" onclick="exitSignUp()">back</button></div>'
                
	document.getElementById("main").innerHTML = str;
        //disable login and signup button
	document.getElementById("logInName").disabled = true;
	document.getElementById("logInPassword").disabled = true;
	document.getElementById("logInSignIn").disabled = true;
	document.getElementById("logInSignUp").disabled = true;
}
function checkSignUp(fname,lname,usernameSU,emailSU,passSU)//validate and complete sign up
{
    var exp = /^[A-Z][a-z]+$/;
    var exp2 = /^[\S\s]{1,15}$/;
    var exp3 = /^[\S]{1,15}$/;
    var emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //verify form data
    var verified = exp.exec(fname.value);
    var verified2 = exp.exec(lname.value);
    var verified3 = exp2.exec(usernameSU.value);
    var verified4 = emailcheck.exec(emailSU.value);
    var verified5 = exp3.exec(passSU.value);
    var nom1 = fname.value;
    var nom2 = lname.value; 
    var nom3 = usernameSU.value;
    var em1 = emailSU.value;
    var pst1 = passSU.value;
    //adjust display to indicate invalid entry
    if (!verified)  
    {  
        document.getElementById("redo1").innerHTML = "*";
	document.getElementById("redo1").style.color = "red";
    }
    else
    {
        document.getElementById("redo1").innerHTML = "";
    }
    if (!verified2)  
    {  
        document.getElementById("redo2").innerHTML = "*";
	document.getElementById("redo2").style.color = "red";
    }
    else
    {
        document.getElementById("redo2").innerHTML = "";
    }
    if (!verified3)  
    {  
        document.getElementById("redo3").innerHTML = "*";
	document.getElementById("redo3").style.color = "red";
    }
    else
    {
        document.getElementById("redo3").innerHTML = "";
    }
    if (!verified4)  
    {  
        document.getElementById("redo4").innerHTML = "*";
	document.getElementById("redo4").style.color = "red";
    }
    else
    {
        document.getElementById("redo4").innerHTML = "";
    }
    if (!verified5)  
    {  
        document.getElementById("redo5").innerHTML = "*";
	document.getElementById("redo5").style.color = "red";
    }
    else
    {
        document.getElementById("redo5").innerHTML = "";
    }
    //if all input is valid, create new customer, add to existing customer data,
    //and save to local storage
    if (verified && verified2 && verified3 && verified4 && verified5)
    {
        function customer(name1, name2, name3, email1, pass1) 
        {
            this.firstname = name1;
            this.lastname = name2;
            this.username = name3;
            this.email = email1;
            this.password = pass1;
        }
        
        var addCustomer = new customer(nom1, nom2, nom3, em1, pst1);
        
        var strCust=localStorage.getItem("customers");
        var $customers=JSON.parse(strCust);
        
        $customers.push(addCustomer);
        
        var str = JSON.stringify($customers);
	localStorage.customers = str;
        //re-enable login
        document.getElementById("logInName").disabled = false;
	document.getElementById("logInPassword").disabled = false;
	document.getElementById("logInSignIn").disabled = false;
        //display inventory
        blah("title");    
    }
}
function checkoutSignInScreen()//display message requiring sign in upon checkout
{
	var str = '<div style="padding:0px 0 0 12px">';
		str+= '<br/><br/>';
		str+= '<table>';
		str+= '<tr>';
		str+= '<td style="width:300px"></td>';
		str+= '<td style="width:394px; text-align:center;">';
		str+= '<table id="showCartC">';
		str+='<tr id="showCartR"><td style="text-align:center;">Please sign in above to check out</td></tr>';
		str+='<tr id="showCartR"><td style="text-align:center;">...or if you are not a member...</td></tr>';
		str+='<tr id="showCartR"><td style="text-align:center;">Please sign up</td></tr>';
		str+='</table></td><td style="width:300px"></td></tr></table>';
		document.getElementById("main").innerHTML = str;
		var screen = true;
}
function checkout()//displays all items selected, and provides grand total
{       //varifies login
	function checkSignIn()
	{
		return (document.getElementById("rcorners1").className == "notSignedIn");		
	}

	if (checkSignIn())
	{
		checkoutSignInScreen();
	}
	else//display customer selection data
	{
		var listDisplay = srtIndx(currentCart, "sku");
		
		var str = '<div style="padding:0px 0 0 12px">';
		str+= '<br/><br/>';
		str+= '<table id="showCart">';
		str+='<tr id="showCartR">';
		str+='<th style="font-size:2em; float:left;"><b>Checkout</b></th>';
		str+='<th><table><tr><td>Click the shopping cart to amend your order&nbsp;&nbsp;&nbsp;&nbsp;';
		str+='<button id="contShop" onclick="blah();">Resume Shopping</button></td></tr></table></th>';
		str+='<th style="float:left;">Unit Price</th>';
		str+='<th>Quantity</th>';
		str+='<th>Total Price</th>';
		str+='</tr>';
		var grandTotal = 0;
		var shipping = 0;
		for (var i = 0; i < listDisplay.length; i++)//display each item
		{
			var total = (listDisplay[i].price * listDisplay[i].amount);
			str+='<tr id="showCartR">';
			str+=('<td><img src="'+listDisplay[i].title+'.jpg" style="width:36px;height:40px;"></td>');
			str+='<td style="color:blue;"><b>'+listDisplay[i].title+'</b></td>';
			str+='<td style="color:#CB4335;"><b>$'+listDisplay[i].price+'</b></td>';
			str+='<td style="text-align:center;"><b>'+listDisplay[i].amount+'</b></td>';
			str+='<td style="text-align:center; color:#CB4335;"><b>$'+total.toFixed(2)+'</b></td>';
			str+='</tr>';
			grandTotal += total;
			shipping += 1.95;
		}
		str+='</table>';//provide tax, shiiping, and grand total
		str+='<br/><div style="float:right">Total: $'+grandTotal.toFixed(2)+'</div>';
		str+='<br/><div style="float:right">Shipping: $'+shipping.toFixed(2)+'</div>';
		var tax = grandTotal * 0.08;
		str+='<br/><div style="float:right">8% Tax: $'+tax.toFixed(2)+'</div>';
		var final = grandTotal + shipping + tax;
		str+='<br/><div style="float:right">Grand Total: $'+final.toFixed(2)+'</div>';
		document.getElementById("main").innerHTML = str;
	}

		
}
function shoppingCart()//displays items in shopping cart
{
	var str = '<div style="padding:0px 0 0 12px">';
	str+= '<br/><br/>';
	str+= '<table id="showCart">';
	str+='<tr id="showCartR">';
	str+='<th style="font-size:2em; float:left;"><b>Shopping Cart</b></th>';
	str+='<th><table><tr><td><button id="checkout" onclick="checkout();">Proceed To Checkout</button>&nbsp;&nbsp;&nbsp;&nbsp;';
	str+='<button id="contShop" onclick="blah();">Continue Shopping</button></td></tr></table></th>';
	str+='<th style="float:left;">Price</th>';
	str+='<th>Quantity</th>';
	str+='</tr>';
	for (var i = 0; i < currentCart.length; i++)//displays each item
	{
		str+='<tr id="showCartR">';
		str+=('<td><img src="'+currentCart[i].title+'.jpg" style="width:72px;height:80px;"></td>');
		str+='<td><table>';
		str+='<tr><td style="color:blue;"><b>'+currentCart[i].title+'</b></td></tr>';
		str+='<tr><td><button id="deleteCartItem" onclick="deleteCartItem('+i+');">Delete This Item</button></td></tr>';
		str+='</table></td>';
		str+='<td style="color:#CB4335;"><b>$'+currentCart[i].price+'</b></td>';
		str+='<td style="text-align:center;"><select id="'+currentCart[i].title+'Amount" onChange="updateAmounts();">';
                switch (currentCart[i].amount)//displays proper item count in pulldown selectors
                {
                    case 1:
                        str+='<option value="1" selected="selected">1</option><option value="2">2</option>';
                        str+='<option value="3">3</option><option value="4">4</option><option value="5">5</option>';
                        break;
                    case 2:
                        str+='<option value="1">1</option><option value="2" selected="selected">2</option>';
                        str+='<option value="3">3</option><option value="4">4</option><option value="5">5</option>';
                        break;
                    case 3:
                        str+='<option value="1">1</option><option value="2">2</option>';
                        str+='<option value="3" selected="selected">3</option><option value="4">4</option><option value="5">5</option>';
                        break;
                    case 4:
                        str+='<option value="1">1</option><option value="2">2</option>';
                        str+='<option value="3">3</option><option value="4" selected="selected">4</option><option value="5">5</option>';
                        break;
                    case 5:
                        str+='<option value="1">1</option><option value="2">2</option>';
                        str+='<option value="3">3</option><option value="4">4</option><option value="5" selected="selected">5</option>';
                        break;
                }
		str+='</select></td>';
		str+='</tr>';
	}
	str+='</table>';
	document.getElementById("main").innerHTML = str;
}
function deleteCartItem(item)//deletes itesm from shopping cart
{   //calculates subtotal after delete
    var prevSubTotal = calcSubTotal();
    var currentSubTotal = prevSubTotal - (currentCart[item].price * currentCart[item].amount);
    
    var strRow = '<div style="padding:0px 0 0 12px">';
	strRow += '<table id="addCartItem">';
	strRow+='<tr>';
	strRow+='<td style="width:300px">';
	strRow+='<table>';
	strRow+='<tr>';
	strRow+='<td><img src="check.png" style="width:64px; height:64px;"></td>'; 
	strRow+=('<td><img src="'+currentCart[item].title+'.jpg" style="width:72px;height:80px;"></td>');
        strRow+='<td style="color:red; text-size:1em;"><b>Item Deleted</b></td>';
	strRow+='</tr>';
	strRow+='</table>';
	strRow+= '<td bgcolor="#eeeeee">';
	strRow+='<table>';
        strRow+='<tr>';
        strRow+='<td style="width:300px;">Cart Subtotal (# items): $'+currentSubTotal.toFixed(2)+'</td>';
        strRow+='<td><button id="shoppingCart" onclick="shoppingCart();"></button></td>';
	strRow+='</tr>';
        strRow+='</table>';
	strRow+='</td></tr></table>';
	strRow+='<br/><br/>';
	strRow+='<button id="return" onclick="blah();">Continue Shopping</button>';
	strRow+='</div>';
	document.getElementById("main").innerHTML = strRow;
        //removes specified item and adjusts customer selection holding array
        currentCart.splice(item, 1);
        cartItems--;
}
function calcSubTotal()//calculates subtotal for display when an item is added to cart
{
    var subTotal = 0;
    for(var i = 0; i < currentCart.length; i++)
    {
        var cartTotal = currentCart[i].price * currentCart[i].amount;
        subTotal += cartTotal;
    }
    return subTotal;
}
function updateAmounts()//tracks selected item amounts and keeps them current
{
    for (var i = 0; i < currentCart.length; i++)
    {
        var newAmount = parseInt(document.getElementById(currentCart[i].title+"Amount").value, 10);
        currentCart[i].amount = newAmount;
    }
}