var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Integer = function(){
	var x = document.getElementById("textint").value;
    var arr = [...x];
    var res = "";
    for(var i=0;i<x.length;i++){
        if(arr[i]>='A'&&arr[i]<='Z'){
            res += alphabet.indexOf(arr[i]) + 66 - 26 - 1 + ' ';
        }else if(arr[i]>='a'&&arr[i]<='z'){
            res += alphabet.indexOf(arr[i]) + 97 + ' ';
        }
    }
    document.getElementById("demoint").innerHTML = res;
}
Integer();
