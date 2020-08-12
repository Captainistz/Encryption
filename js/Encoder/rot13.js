var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;

var Rot = function () {
    var x = document.getElementById("textrot").value;
    var res = runCipher(x);
    document.getElementById("demorot").innerHTML = res;
}

function runCipher(x) {
    var cipherText = x;
    var cipherFinish = '';
    for (i = 0; i < cipherText.length; i++) {
        var letter = cipherText[i];
        var upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();
        var index = alphabet.indexOf(letter);
        if (index == -1) {
            cipherFinish += letter;
        } else {
            index = ((index + 13) + alphabet.length);
            var nextLetter = fullAlphabet[index];
            if (upper) nextLetter = nextLetter.toUpperCase();
            cipherFinish += nextLetter;
        }
    }
    return cipherFinish;
}

Rot();
