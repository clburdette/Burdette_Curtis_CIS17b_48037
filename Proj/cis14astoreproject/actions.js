var currentCart = [];
var cartItems = 0;
var $title = "title";
var $year = "year";
var $rarity = "rarity";
var $price = "price";

function srtIndx(obj,sort)
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
function blah(sort)
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
           
            var strTab='<table cellspacing="0" cellpadding="5" width="100%">';
                strTab+='<tr>';
                    strTab+='<td align="left"><b></b></td>';
                    strTab+='<td align="left"><b></b></td>';
                    strTab+='<td align="left"><b><button onclick="blah($title);">Title</button></b></td>';
                    strTab+='<td align="left"><b><button onclick="blah($year);">Year</button></b></td>';
                    strTab+='<td align="left"><b><button onclick="blah($rarity);">Rarity</button></b></td>';
		    strTab+='<td align="left"><b><button onclick="blah($price);">Price</button></b></td>';
                strTab+='</tr>';
            // Fetch and print all the records....
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
            // Make the links to other pages, if necessary.
            
	document.getElementById("main").innerHTML = strTab + strRow;
	}
function addItem(itemNumber)
{
	var carts = users;
	currentCart[cartItems] = carts[itemNumber];
	var strRow = '<div style="padding:0px 0 0 12px">';
	strRow += '<table id="addCartItem">';
	strRow+='<tr>';
	strRow+='<td style="width:300px">';
	strRow+='<table>';
	strRow+='<tr>';
	strRow+='<td><img src="check.png" style="width:64px; height:64px;"></td>'; 
	strRow+=('<td><img src="'+currentCart[cartItems].title+'.jpg" style="width:72px;height:80px;"></td>');
	strRow+='<td style="color:green; text-size:1em;"><b>Added To Cart</b></td>';
	strRow+='</tr>';
	strRow+='</table>';
	strRow+= '<td bgcolor="#eeeeee">';
	strRow+='<table>';
        strRow+='<tr>';
        strRow+='<td style="width:300px;">Cart Subtotal (# items): $99.99</td>';
        strRow+='<td><button id="shoppingCart" onclick="shoppingCart();"></button></td>';
	strRow+='</tr>';
        strRow+='</table>';
	strRow+='</td></tr></table>';
	strRow+='<br/><br/>';
	strRow+='<button id="return" onclick="blah();">Continue Shopping</button>';
	strRow+='</div>';
	document.getElementById("main").innerHTML = strRow;
	
	cartItems++;
}
function signIn()
{
	var usernameInput = document.getElementById("logInName").value;
	var passwordInput = document.getElementById("logInPassword").value;
	var usernameMatch = false;
	var passwordMatch = false;
	var usernameCapture;
	var passwordCapture;

	for (var i = 0; i < customers.length; i++)
	{
		if (usernameInput == customers[i].username)
		{
			usernameMatch = true;
			usernameCapture = customers[i].username;
			passwordCapture = customers[i].password;
		}
	}
	if (!usernameMatch)
	{
		document.getElementById("logInName").reset();
		document.getElementById("logInName").setAttribute("value","not a valid user name");
	}
	else
	{
		if (passwordInput == passwordCapture)
		{
			passwordMatch = true;
		}
		if (!passwordMatch)
		{
			document.getElementById("logInPassword").reset();
			document.getElementById("logInPassword").setAttribute("value","not a valid password");
		}
		else
		{
			document.getElementById("signInBar").innerHTML = "&nbsp;&nbsp;&nbsp;&nbspWelcome back, " + usernameCapture + "!";
			document.getElementById("rcorners1").setAttribute("class","signedIn");
		}
	}
}	
function signUp()
{
		var str = '<div style="height:50px"></div>';
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
		str += '<td><input type="text" id="emailSU" name="emailSU" style="width:400px"><span id="redo3"></span></td>';
		str += '</tr>';
		str += '<tr align="left">';
		str += '<td>password:</td>';
		str += '<td><input type="text" id="passSU" name="passSU" style="width:400px"><span id="redo4"></span></td>';
		str += '</tr>';
		str += '<tr align="left">';
		str += '<td>re-enter:</td>';
		str += '<td><input type="text" id="passSU2" name="passSU2" style="width:400px"><span id="redo5"></span></td>';
		str += '</tr>';
		str += '</table><br/>';
		str += '<button type="button" style="height: 25px; width: 100px; font-size:1em;" onclick="checkSignUp(document.getElementById("name"), document.getElementById("email"))">submit</button>';
		str += '</fieldset><br/><br/>';
		str += '<div style="height:50px; width:500px; margin:0px auto; text-align:center;"><button type="button" style="height: 25px; width: 100px; font-size:1em;" onclick="exitSignUp()">back</button></div>';
	document.getElementById("main").innerHTML = str;
	document.getElementById("logInName").disabled = true;
	document.getElementById("logInPassword").disabled = true;
	document.getElementById("logInSignIn").disabled = true;
	document.getElementById("logInSignUp").disabled = true;
}
function checkoutSignInScreen()
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
function checkout()
{
	function checkSignIn()
	{
		return (document.getElementById("rcorners1").className == "notSignedIn");		
	}

	if (checkSignIn())
	{
		checkoutSignInScreen();
	}
	else
	{
		var checkoutList = [];

		function checkoutItem(sku, title, amount, price)
		{
			this.sku = sku;
    			this.title = title;
    			this.amount = amount;
    			this.price = price;
			this.total = this.price * this.amount;
		}
		for (i = 0; i < currentCart.length; i++)
		{
			var current = currentCart[i];
			checkoutList[i] = new checkoutItem(current.sku, current.title, current.amount, current.price);
		}
		var listDisplay = srtIndx(checkoutList, "sku");
		
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
		for (var i = 0; i < listDisplay.length; i++)
		{
			
			str+='<tr id="showCartR">';
			str+=('<td><img src="'+listDisplay[i].title+'.jpg" style="width:36px;height:40px;"></td>');
			str+='<td style="color:blue;"><b>'+listDisplay[i].title+'</b></td>';
			str+='<td style="color:#CB4335;"><b>$'+listDisplay[i].price+'</b></td>';
			str+='<td style="text-align:center;"><b>'+listDisplay[i].amount+'</b></td>';
			str+='<td style="text-align:center; color:#CB4335;"><b>$'+(listDisplay[i].total).toFixed(2)+'</b></td>';
			str+='</tr>';
			grandTotal += listDisplay[i].total;
			shipping += 1.95;
		}
		str+='</table>';
		str+='<br/><div style="float:right">Total: $'+grandTotal.toFixed(2)+'</div>';
		str+='<br/><div style="float:right">Shipping: $'+shipping.toFixed(2)+'</div>';
		var tax = grandTotal * 0.08;
		str+='<br/><div style="float:right">8% Tax: $'+tax.toFixed(2)+'</div>';
		var final = grandTotal + shipping + tax;
		str+='<br/><div style="float:right">Grand Total: $'+final.toFixed(2)+'</div>';
		document.getElementById("main").innerHTML = str;
	}

		
}
function checkoutPrep()
	{
		for (i = 0; i < currentCart.length; i++)
		{
			currentCart[i].amount = document.getElementById(currentCart[i].title + "Amount").value;
		}
		checkout();
	} 
function shoppingCart()
{
	var str = '<div style="padding:0px 0 0 12px">';
	str+= '<br/><br/>';
	str+= '<table id="showCart">';
	str+='<tr id="showCartR">';
	str+='<th style="font-size:2em; float:left;"><b>Shopping Cart</b></th>';
	str+='<th><table><tr><td><button id="checkout" onclick="checkoutPrep();">Proceed To Checkout</button>&nbsp;&nbsp;&nbsp;&nbsp;';
	str+='<button id="contShop" onclick="blah();">Continue Shopping</button></td></tr></table></th>';
	str+='<th style="float:left;">Price</th>';
	str+='<th>Quantity</th>';
	str+='</tr>';
	for (var i = 0; i < cartItems; i++)
	{
		str+='<tr id="showCartR">';
		str+=('<td><img src="'+currentCart[i].title+'.jpg" style="width:72px;height:80px;"></td>');
		str+='<td><table>';
		str+='<tr><td style="color:blue;"><b>'+currentCart[i].title+'</b></td></tr>';
		str+='<tr><td><button id="deleteCartItem" onclick="deleteCartItem();">Delete This Item</button></td></tr>';
		str+='</table></td>';
		str+='<td style="color:#CB4335;"><b>$'+currentCart[i].price+'</b></td>';
		str+='<td style="text-align:center;"><select id="'+currentCart[i].title+'Amount">';
		str+='<option value="1">1</option><option value="2">2</option><option value="3">3</option>';
		str+='<option value="4">4</option><option value="5">5</option></select></td>';
		str+='</tr>';
	}
	str+='</table>';
	document.getElementById("main").innerHTML = str;
}