const intersection = (a, b) => {
  let s = new Set(a);
  let res = [];

  for(let el of b) {
    if(s.has(el))
      res.push(el);
  }
  return res;
};

intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
