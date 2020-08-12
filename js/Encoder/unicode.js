var Alp = "abcdefghijklmnopqrstuvwxyz";
var Unicode = function(){
	var x = document.getElementById("textuni").value;
    var arr = [...x];
    var res = "";
    for(var i=0;i<x.length;i++){
        res += 'U+';
        res += Alp.indexOf(arr[i]) + 61;
        res += ' ';
    }
    document.getElementById("demouni").innerHTML = res;
}
Unicode();