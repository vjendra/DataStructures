const connectedComponentsCount = (graph) => {
  
  const visited = new Set();
  let count = 0;
  
  for(let node in graph) {
    if(explore(graph, node, visited))
      count++;
  }
  return count;
};

const explore = (graph, current, visited) => {
  
  if(visited.has(String(current))) return false;
  
  visited.add(String(current));

  for(let neighbor of graph[current])
    explore(graph, neighbor, visited);
  
  return true;  
};

connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}); // -> 3
