var luckydog =2;

var seed = 1;

Math.random = function(_seed=seed){
return ('0.'+Math.sin(_seed).toString().substr(6));
}
 
function shuffle(array) {
 
  var currentIndex = array.length, temporaryValue, randomIndex;
 
 
 
  // While there remain elements to shuffle...
 
  while (0 !== currentIndex) {
 
 
 
    // Pick a remaining element...
 
    randomIndex = Math.floor(Math.random() * currentIndex);
 
    currentIndex -= 1;
 
 
 
    // And swap it with the current element.
 
    temporaryValue = array[currentIndex];
 
    array[currentIndex] = array[randomIndex];
 
    array[randomIndex] = temporaryValue;
 
  }
 
  console.log("shuffle succeed!")
 
  return array;
 
}
 
var all_comments = document.getElementsByClassName("dynamic-list-item-wrap f-clear");
 
var index_arr = Array.from(Array(all_comments.length).keys())
 
var index_arr = shuffle(index_arr);
 
for (var i=0; i<luckydog; i++){
 
    console.log(all_comments[index_arr[i]].children[1].children[0].textContent)
 
}
