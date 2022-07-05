const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs);
  const cache = {};
  let numofSems = 0;
  
  if(!prereqs.length) return 1;
  
  for(let node in graph)
    cache[node] = explore(graph, node, cache);
  
  return 1 + Math.max(...Object.values(cache));
};
const explore = (graph, node, cache) => {
  if(!graph[node]) return 0;
  if(cache.hasOwnProperty(node)) return cache[node]; 
  
  let size;
  for(let neighbor of graph[node]) {
    size = 1 + explore(graph, neighbor, cache);
    cache[neighbor] = size;
  }
  return size;
}

const buildGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const [ a, b ] = edge;
    if (!(a in graph)) graph[a] = [];
    graph[a].push(b);
  }
  
  return graph;
};

const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
semestersRequired(numCourses, prereqs); // -> 5