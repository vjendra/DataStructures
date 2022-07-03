const closestCarrot = (grid, startRow, startCol) => {
  let length = -1;
  const visited = new Set( startRow + ',' + startCol );
  const queue = [ { 
    row: startRow,
    col: startCol,
    distance: 0
  }];
  
  while(queue.length > 0) {
    const { row, col, distance } = queue.shift();
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    const key = row + ',' + col;
    
    if(rowInbounds && colInbounds && grid[row][col] !== 'X' && !visited.has(key)) {
      visited.add(key);
      if( grid[row][col] === 'C' )
        return distance;
      queue.push({ row: row + 1, col: col, distance: distance + 1 });
      queue.push({ row: row - 1, col: col, distance: distance + 1 });
      queue.push({ row: row, col: col + 1, distance: distance + 1 });
      queue.push({ row: row, col: col - 1, distance: distance + 1 });
    }
    
  }
  return length;
};

module.exports = {
  closestCarrot,
};

/* Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1. */

const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

closestCarrot(grid, 1, 2); // -> 4