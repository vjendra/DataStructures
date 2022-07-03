const longestPath = (graph) => {
  const cache = {}; 
  
  for(let node in graph) 
    cache[node] = explore(graph, node, cache);

  return Math.max(...Object.values(cache));
};
const explore = (graph, node, cache) => {
  if(graph[node].length === 0) return 0;
  if(cache.hasOwnProperty(node)) return cache[node]; 
  
  let size;
  for(let neighbor of graph[node]) {
    size = 1 + explore(graph, neighbor, cache);
    cache[neighbor] = size;
  }
  return size;
};
const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};

longestPath(graph); // -> 4