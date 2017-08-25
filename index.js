function countdown(para){
  return para;
}
function createMultiplier(){
  var doubler = function (){
    return createMultiplier() ^ 2;
  }
  var tripler = function(){
    return createMultiplier() ^ 3;
  }
}
function multiplierValue(){
  
}
window.setTimeout(2000, countdown());
