var Square = function(){
	var params01 = document.getElementById("textsquare").value;
    var params03 = document.getElementById("squarekey").value;
    var params02 = 'abcdefghiklmnopqrstuvwxyz';
    
    var plaintext, ciphertext, keysquare, keyword;
	plaintext = params01.toLowerCase().replace(/[^abcdefghiklmnopqrstuvwxyz]/g, "");
	keysquare = params02.toLowerCase().replace(/[^abcdefghiklmnopqrstuvwxyz]/g, "");
	keyword = params03.toLowerCase().replace(/[^a-z]/g, "");
	adfgvx = "ADFGX";
	ciphertext1 = "";
	for (i = 0; i < plaintext.length; i++) {
		index = keysquare.indexOf(plaintext.charAt(i));
		ciphertext1 += adfgvx.charAt(index / 5) + adfgvx.charAt(index % 5);
	}
	var colLength = ciphertext1.length / keyword.length;
	var chars = "abcdefghijklmnopqrstuvwxyz";
	ciphertext = "";
	k = 0;
	for (i = 0; i < keyword.length; i++) {
		while (k < 26) {
			t = keyword.indexOf(chars.charAt(k));
			arrkw = keyword.split("");
			arrkw[t] = "_";
			keyword = arrkw.join("");
			if (t >= 0) break;
			else k++;
		}
		for (j = 0; j < colLength; j++) ciphertext += ciphertext1.charAt(j * keyword.length + t);
	}
	
	var res = ciphertext;
    
    document.getElementById("demosquare").innerHTML = res;
}
Square();



