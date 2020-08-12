var Spelling = function(){
	var text = document.getElementById("textalp").value;
    var newline = '<br />';
    var results = '';
    text = text.toUpperCase();
    var arr = [...text];
    for (var i=0; i < text.length; i++)
    {
        switch (arr[i])
        {
            case 'A': results = results + 'alfa '; break;
            case 'B': results = results + 'bravo '; break;
            case 'C': results = results + 'charlie '; break;
            case 'D': results = results + 'delta '; break;
            case 'E': results = results + 'echo '; break;
            case 'F': results = results + 'foxtrot '; break;
            case 'G': results = results + 'golf '; break;
            case 'H': results = results + 'hotel '; break;
            case 'I': results = results + 'india '; break;
            case 'J': results = results + 'juliett '; break;
            case 'K': results = results + 'kilo '; break;
            case 'L': results = results + 'lima '; break;
            case 'M': results = results + 'mike '; break;
            case 'N': results = results + 'november '; break;
            case 'O': results = results + 'oscar '; break;
            case 'P': results = results + 'papa '; break;
            case 'Q': results = results + 'quebec '; break;
            case 'R': results = results + 'romeo '; break;
            case 'S': results = results + 'sierra '; break;
            case 'T': results = results + 'tango '; break;
            case 'U': results = results + 'uniform '; break;
            case 'V': results = results + 'victor '; break;
            case 'W': results = results + 'whiskey '; break;
            case 'X': results = results + 'xray '; break;
            case 'Y': results = results + 'yankee '; break;
            case 'Z': results = results + 'zulu '; break;
            case ' ': results = results + '(space) '; break;
            case '\n': results = results + '(newline)'; break;
            default: results = results + text.charAt(i) + ' ';
        }
    }
    document.getElementById("demoalp").innerHTML = results;
}
Spelling();