function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

const uncompress = (s) => {
  let i = 0, j = 0, result = [];
  while(j < s.length) {
    if(!isLetter(s[j])) {
      j++;
    }
    else {
      let count = parseInt(s.slice(i,j));
      while(count > 0) {
        count--;
        result.push(s[j]);
      }
      i = ++j;
    }
  }
  return result.join('');
};


uncompress("12c3s");