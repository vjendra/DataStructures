const mostFrequentChar = (s) => {
  let map = {};
  let highest = 0 , char; 
  for(let char of s)
    map[char] = map[char] ? ++map[char] : 1;

  for(let key in map) {
    if( highest < map[key]) {
      highest = map[key];
      char = key;
    }
  }
  
  return char;
};

mostFrequentChar('bookeeper'); // -> 'e'
