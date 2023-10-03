function firstNonRepeatedChar(str) {
var findChar = function(str){
  var char;

  for(var i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      char = str[i];
      break;
    }
  }

  return char;
}

$(document).ready(function(){
  $('#result').append(findChar("abacdsdbec"));
})
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
