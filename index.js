// add solution here


function theBeatlesPlay(musicians, instruments){
  var facts = [];
  
  for(i = 0; i < musicians.length; i++) {
    facts.push(`${musicians[i]} plays ${instruments[1]}`)
  }
  
  return facts;
}