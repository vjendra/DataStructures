const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();
  
  for(let node in graph) 
    if(explore(graph, node, visiting, visited) === true) return true;
  
  return false;
};

const explore = (graph, node, visiting, visited) => {

  if (visited.has(node)) return false;
  
  if(visiting.has(node)) return true;
  visiting.add(node);
  
  for(let neighbor of graph[node]) 
      if(explore(graph, neighbor, visiting, visited) === true) return true;
  
  visiting.delete(node);
  visited.add(node);
  return false;
};
hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["d"],
  d: ["b"],
}); // -> true