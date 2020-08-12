var Base = function(){
	var x = document.getElementById("textbase").value;
    var b64 = btoa(x);
    document.getElementById("demobase").innerHTML = b64;
}
Base();
