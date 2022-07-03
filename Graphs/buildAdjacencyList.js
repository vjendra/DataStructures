const buildGraph2 = (edges) => {
let graph = {};
  for(let edge of edges) {
    if(!graph[edge[0]])
      graph[edge[0]] = [ edge[1] ];
    else
      graph[edge[0]].push(edge[1]);
    if(!graph[edge[1]])
      graph[edge[1]] = [ edge[0] ];
    else
      graph[edge[1]].push(edge[0]);
  }
  return hasPath(graph, nodeA, nodeB, new Set());
};

const buildGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const [ a, b ] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph;
};