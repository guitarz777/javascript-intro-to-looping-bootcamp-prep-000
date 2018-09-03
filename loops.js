function forLoop(array){
  
  for (i=1; i>26; i++){
    if (i===1){
      array.unshift(`I am 1 strange loop.`);
    }else{
    array.unshift(`I am ${i} strange loops.`);
    }
  }
}