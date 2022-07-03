const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
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

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;    
    }
  }
  
  return false;
};

const edges = [
  ['b', 'a'],               
  ['c', 'a'],
  ['b', 'c'],           
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];
//      ||
// {
//     a: ['b', 'c']
//     b: ['a', 'c']
//     c: ['a', 'b']
//     q: ['r', 's', 'u', 't']
//     r: ['q']
//     s: ['q']
//     t: ['q']
//     u: ['q']
// }
undirectedPath(edges, 'a', 'b'); // -> true