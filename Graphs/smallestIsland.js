const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  
  for(let row = 0; row < grid.length; row++) 
    for(let col = 0; col < grid[0].length; col++) {
        const size = explore(grid, row, col, visited);
        if(size > 0) 
          minSize = Math.min(size, minSize);
    }
  return minSize;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length; 
  const colInbounds = 0 <= col && col < grid[0].length; 
  
  if(!rowInbounds || !colInbounds) return 0;
  if(grid[row][col] === 'W') return 0;
  
  const key = row + ',' + col;
  if(visited.has(key)) return 0;
  visited.add(key);
  
  let size = 1;
  
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row, col + 1, visited);
  size += explore(grid, row, col - 1, visited);

  return size;
};

const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1