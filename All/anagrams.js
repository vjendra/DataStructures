const anagrams = (s1, s2) => {
  let map1 = {};
  let map2 = {};
  
  if(s1.length != s2.length) return false;
  for(let char of s1)
    map1[char] = map1[char] ? ++map1[char] : 1;
  for(let char of s2)
    map2[char] = map2[char] ? ++map2[char] : 1;
  
  for(let key in map1) {
    if(map1[key] != map2[key])
      return false;
  }
  return true;
};

anagrams('restful', 'fluster'); // -> true
