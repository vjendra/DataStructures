const isLetter = (c) => c.toLowerCase() != c.toUpperCase();
const compress = (s) => {
 let result = [], i = 0, j = 0;
  while(j <= s.length) {
    if(s[i] == s[j])
      j++;
    else {
      let count = j - i;
      if(count > 1)
        result.push(count + s[i]);
      else
        result.push(s[i]);
      count = 0;
      i = j;
    }
  }
  return result.join('');
};

compress('ccaaatsss'); // -> '2c3at3s'
