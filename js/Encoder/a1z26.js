var alphabet = "~abcdefghijklmnopqrstuvwxyz";
var A1 = function(){
	var x = document.getElementById("texta1").value;
    var arr = [...x];
    var res = "";
    for(var i=0;i<x.length;i++){
        if((arr[i]<'a'||arr[i]>'z')&&(arr[i]<'A'||arr[i]>'Z')){
            continue;
        }
        res += alphabet.indexOf(arr[i]) + 1 + ' ';
    }
    
    document.getElementById("demoa1").innerHTML = res;
}
A1();
