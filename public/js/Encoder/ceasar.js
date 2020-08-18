var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;

var Caesar = function () {
    var cipherText = document.getElementById("textcaesar").value;
    var cipherOffset = document.getElementById("caesarkey").value;
    cipherOffset = (cipherOffset % alphabet.length);
    var cipherFinish = '';
    for (i = 0; i < cipherText.length; i++) {
        var letter = cipherText[i];
        var upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();

        var index = alphabet.indexOf(letter);
        if (index == -1) {
            cipherFinish += letter;
        } else {
            index = ((index + cipherOffset) + alphabet.length);
            var nextLetter = fullAlphabet[index];
            if (upper) nextLetter = nextLetter.toUpperCase();
            cipherFinish += nextLetter;
        }
    }
    document.getElementById("democaesar").innerHTML = cipherFinish;
    document.getElementById("keycaesar").innerHTML = cipherOffset;
}

Caesar();


