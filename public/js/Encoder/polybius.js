var Alp = "abcdefghiklmnopqrstuvwxyz"
var Poly = function(){
	var x = document.getElementById("textpoly").value.toLowerCase();
    var arr = [...x];
    var res = "";
    for(var i=0;i<x.length;i++){
        
        if(arr[i]=='j'){
            res += 24 + ' ';
            continue;
        }
        var y = Alp.indexOf(arr[i]) + 1;
        res += Math.ceil(y/5);
        
        if(arr[i]=='e'||arr[i]=='k'||arr[i]=='p'||arr[i]=='u'||arr[i]=='z'){
            res += y % 5 + 5;
        }else{
            res += y % 5;
        }
        res += ' ';
    }
    document.getElementById("demopoly").innerHTML = res;
}
Poly();
