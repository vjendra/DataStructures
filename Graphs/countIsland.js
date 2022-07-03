const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();
  
  for (let i = 0; i < grid.length; i++) 
    for (let j = 0; j < grid[i].length; j++) 
      if(explore(grid, i, j, visited) === true)
        count++;
        
  return count;
};
const explore = (grid, row, col, visited) => {
   
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length; 
  
  if(!rowInbounds || !colInbounds) return false;
  if(grid[row][col] === 'W') return false;
  
  const key = row + "," + col;
  if(visited.has(key)) return false;
  visited.add(key);
  
  explore(grid, row, col + 1, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row - 1, col, visited);
  
  return true;
};
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

islandCount(grid); // -> 4