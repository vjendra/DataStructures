
const fiveSort = (nums) => {
  for(let i = 0, j = nums.length - 1; i < j; i++) {
    
    if(nums[i] == 5) {
      
      if(nums[j] !== 5) 
        [nums[i], nums[j]] = [nums[j], nums[i]];
      else {
        while(nums[j] === 5)
          j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      
      j--; 
    }
  }
  return nums;
};

fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 