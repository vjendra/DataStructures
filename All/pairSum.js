const pairSum = (numbers, targetSum) => {
  let positiveMap = {};
  let negativeMap = {};
  
  for(let i = 0; i < numbers.length; i++) {
   
    let numberNeeded = targetSum - numbers[i];
    
    if(numberNeeded < 0) {
      if((Math.abs(numberNeeded) in negativeMap) && positiveMap[numberNeeded] != i)
        return [negativeMap[Math.abs(numberNeeded)], i];
    } else {
      if((numberNeeded in positiveMap) && positiveMap[numberNeeded] != i)
        return [positiveMap[numberNeeded], i];
    }
    
    if(numbers[i] < 0)
      negativeMap[Math.abs(numbers[i])] = i;
    else
      positiveMap[numbers[i]] = i;
  }

};

pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]