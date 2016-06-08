var currentCart = [];
var cartItems = 1;

function srtIndx(obj,pToSrt){
                //create an indx array for the sort
                var idx=[];
                for(var pos=0;pos<obj.length;pos++){
                    idx[pos]=pos;
                }
                //Sort the indexed array
                if(pToSrt){
                    for(var pos=0;pos<obj.length-1;pos++){
                        var posObj=obj[idx[pos]];
                        for(var lst=pos+1;lst<obj.length;lst++){
                            var lstObj=obj[idx[lst]];
                            if(posObj[pToSrt]>lstObj[pToSrt]){
                                var temp=idx[pos];
                                idx[pos]=idx[lst];
                                idx[lst]=temp;
                            }
                        }
                    }
                }
                return idx;
		document.getElementById("splashTitle").innerHTML = cartItems;
            }
function blah()
	{         
            var url=document.location.href;
	    var $_GET=getForm(url);
	    var $strUser=localStorage.getItem("users");
	    var $users=JSON.parse($strUser);
	    var indx=srtIndx($users,$_GET['sort']);
            
            var $display = 10;
            var $pages;
            var $start;
            
            if ($_GET['p'] && ($_GET['p'] === parseInt($_GET['p'], 10))) {
                    $pages = $_GET['p'];
            } else {
                    var $records = $users.length;
                   
                    if ($records > $display) { 
                            $pages = Math.ceil ($records/$display);
                    } else {
                            $pages = 1;
                    }
            }
            
            if (parseInt($_GET['s'], 10)){
                    $start = $_GET['s'];
            } else {
                    $start = 0;
            }
            
            //var $sort = ($_GET['sort'] ? $_GET['sort'] : 'title');
	    var $sort = 'title';
           
             switch ($sort) {
                    case 'title':
                            $order_by = 'title';
                            break;
                    case 'year':
                            $order_by = 'year';
                            break;
                    case 'rarity':
                            $order_by = 'rarity';
                            break;
		    case 'price':
                            $order_by = 'price';
                            break;	
                    default:
                            $order_by = 'title';
                            $sort = 'title';
                            break;
            }
            var strTab='<table cellspacing="0" cellpadding="5" width="100%">';
                strTab+='<tr>';
                    strTab+='<td align="left"><b></b></td>';
                    strTab+='<td align="left"><b></b></td>';
                    strTab+='<td align="left"><b><a href="user_view.html?sort=title">Title</a></b></td>';
                    strTab+='<td align="left"><b><a href="user_view.html?sort=year">Year</a></b></td>';
                    strTab+='<td align="left"><b><a href="user_view.html?sort=rarity">Rarity</a></b></td>';
		    strTab+='<td align="left"><b><a href="user_view.html?sort=price">Price</a></b></td>';
                strTab+='</tr>';
            // Fetch and print all the records....
            var $end=$users.length;
            if($end-$start>$display)$end=$start+$display;
            var $bg = '#eeeeee';
	    var strRow = ""; 
            for (var i = $start; i < $end;i++){
                    var $usrs=$users[indx[i]];
                    $bg = ($bg=='#eeeeee' ? '#ffffff' : '#eeeeee');
                    strRow+= '<tr bgcolor="'+$bg+'">';
                            strRow+=('<td align="left"><input type="submit" title="submit" value="add to cart" onclick="addItem('+i+')"/></td>');
			    strRow+=('<td align="left"><img src="'+$usrs['title']+'.jpg" style="width:72px;height:80px;"></td>');
                            strRow+=('<td align="left">'+$usrs['title']+'</td>');
                            strRow+=('<td align="left">'+$usrs['year']+'</td>');
                            strRow+=('<td align="left">'+$usrs['rarity']+'</td>');
			    strRow+=('<td align="left">$'+$usrs['price']+'</td>');
                        strRow+='</tr>';
            }
            strRow+='</table>';
            // Make the links to other pages, if necessary.
            if ($pages > 1) { 
                    var strPg='<br /><p>';
                    $current_page = Math.floor($start/$display) + 1;
                    // If it's not the first page, make a Previous button:
                    if ($current_page != 1) {
                            strPg+='<a href="user_view.html?s='+($start - $display)+'&p='+$pages+'&sort='+$sort+'">Previous</a> ';
                    }
                    // Make all the numbered pages:
                    for (var $i = 1; $i <= $pages; $i++) {
                            if ($i != $current_page) {
                                    strPg+='<a href="user_view.html?s='+(($display * ($i - 1)))+'&p='+$pages+'&sort='+$sort+'">'+$i+'</a> ';
                            } else {
                                    strPg+=$i+' ';
                            }
                    } // End of FOR loop.
                    // If it's not the last page, make a Next button:
                    if ($current_page != $pages) {
                            strPg+='<a href="user_view.html?s='+($start + $display)+'&p='+$pages+'&sort='+$sort+'">Next</a>';
                    }
                    strPg+='</p>'; // Close the paragraph.	
            } // End of links section.
	document.getElementById("main").innerHTML = strTab + strRow;
	document.getElementById("splashTitle").innerHTML = cartItems;
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
	strRow+='<td><button id="checkout" onclick="checkout();">Proceed To Checkout</button></td>';
	strRow+='</tr>';
        strRow+='</table>';
	strRow+='</td></tr></table>';
	strRow+='<br/><br/>';
	strRow+='<button id="return" onclick="blah();">Continue Shopping</button>';
	strRow+='</div>';
	document.getElementById("main").innerHTML = strRow;
	
	cartItems++;
	document.getElementById("splashTitle").innerHTML = cartItems;
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
function shoppingCart()
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
	document.getElementById("splashTitle").innerHTML = cartItems;
}