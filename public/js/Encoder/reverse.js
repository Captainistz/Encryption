var Reverse = function(){
	var x = document.getElementById("textreverse").value;
    document.getElementById("demoreverse").innerHTML = reverseString(x);
}


function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray;
}
 
Reverse();