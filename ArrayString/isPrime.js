const isPrime = (n) => {
  if(n < 2) return false;
  
  let i = 2;
  while(i <= Math.sqrt(n) ) {
      if(n % i == 0)
          return false;
      i++;
  }
  return true;
};
