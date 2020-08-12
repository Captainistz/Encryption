var Morse = function () {
    var text = document.getElementById("textmorse").value;
    var newline = '<br />';
    var results = '';
    text = text.toUpperCase();
    
    for (var i=0; i < text.length; i++)
    {
        switch (text.charAt(i))
        {
            case 'A': results = results + '.- '; break;
            case 'B': results = results + '-... '; break;
            case 'C': results = results + '-.-. '; break;
            case 'D': results = results + '-.. '; break;
            case 'E': results = results + '. '; break;
            case 'F': results = results + '..-. '; break;
            case 'G': results = results + '--. '; break;
            case 'H': results = results + '.... '; break;
            case 'I': results = results + '.. '; break;
            case 'J': results = results + '.--- '; break;
            case 'K': results = results + '-.- '; break;
            case 'L': results = results + '.-.. '; break;
            case 'M': results = results + '-- '; break;
            case 'N': results = results + '-. '; break;
            case 'O': results = results + '--- '; break;
            case 'P': results = results + '.--. '; break;
            case 'Q': results = results + '--.- '; break;
            case 'R': results = results + '.-. '; break;
            case 'S': results = results + '... '; break;
            case 'T': results = results + '--- '; break;
            case 'U': results = results + '..- '; break;
            case 'V': results = results + '...- '; break;
            case 'W': results = results + '.-- '; break;
            case 'X': results = results + '-..- '; break;
            case 'Y': results = results + '-.-- '; break;
            case 'Z': results = results + '--.. '; break;
            case ' ': results = results + ''; break;
            case '1': results = results + '.---- ';break;
            case '2': results = results + '..--- ';break;
                case '3': results = results + '...-- ';break;
                case '4': results = results + '....- ';break;
                case '5': results = results + '..... ';break;
                case '6': results = results + '-.... ';break;
                case '7': results = results + '--... ';break;
                case '8': results = results + '---.. ';break;
                case '9': results = results + '----. ';break;
                case '0': results = results + '----- ';break;
                case '.': results = results + '.-.-.- ';break;
                case ',': results = results + '--..-- ';break;
                case '?': results = results + '..--.. ';break;
                case '!': results = results + '..--. ';break;
                case '\'': results = results + '.----. ';break;
                case '\"': results = results + '.-..-. ';break;
                case '\:': results = results + '---... ';break;
                case '=': results = results + '-...- ';break;
            case'\n': results = results + newline; break;
            default: results = results + text.charAt(i) + ' ';
        }
        results = results + ' | ';
    }
    document.getElementById("demomorse").innerHTML = results;
}


Morse();
