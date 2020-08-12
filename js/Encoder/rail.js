/**
 * Performs encode on given content.
 * @protected
 * @param {Chain} content
 * @return {number[]|string|Uint8Array|Chain} Encoded content
 */
var Rail = function () {
    var msg = document.getElementById("textrail").value;
    var key = parseInt(document.getElementById("railkey").value);
    var len = msg.length;
    var k = -1;
    var row = 0;
    var col = 0;
    var arr = Create2DArray(100);
    
    for(i = 0; i < len; ++i){
        arr[row][col++] = msg[i];
 
        if(row == 0 || row == key-1)
            k= k * (-1);
 
        row = row + k;
    }
    arr = arr.flat().join('');
    document.getElementById("demorail").innerHTML = arr;
}

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

Rail();
