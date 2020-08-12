var Replace = function () {
    var str = document.getElementById("textreplace").value;
    var key = document.getElementById("replacekey").value;
    var rep = document.getElementById("replacekeytext").value;
    var res = str.split(key).join(rep);
    console.log("hmm: ", res);
    document.getElementById("demoreplace").innerHTML = res;
}


Replace();
