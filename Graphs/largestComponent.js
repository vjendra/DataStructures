const largestComponent = (graph) => {
  
  const visited = new Set();
  let largestComponent = 0;
  
  for(let node in graph)
    largestComponent = Math.max(explore(graph, node, visited), largestComponent);
  
  return largestComponent;
};
const explore = (graph, node, visited) => {
  
  if(visited.has(String(node))) return 0;
  visited.add(String(node));
  
  let size = 1;
  
  for (let neighbor of graph[node]) {
     size += explore(graph, neighbor, visited);
  }
  return size;
};

largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5