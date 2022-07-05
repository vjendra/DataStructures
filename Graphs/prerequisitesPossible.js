const prereqsPossible = (numCourses, prereqs) => {
  const visited = new Set();
  const visiting = new Set();
  const graph = buildGraph(prereqs);
  
  for(let node in graph)
    if(hasCycle(graph, node, visiting, visited) === true) return false;
  
  return true  
};
const hasCycle = (graph, node, visiting, visited) => {
  
  if(visited.has(node)) return false;
  
  if(visiting.has(node)) return true;
  visiting.add(node);
  
  if(graph[node]) {
    for(let neighbor of graph[node])
      if(hasCycle(graph, neighbor, visiting, visited) === true) return true;
  }
  
  visiting.delete(node);
  visited.add(node);
  return false;
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
// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.
const numCourses = 6;
const prereqs1 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
const prereqs2 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
prereqsPossible(numCourses, prereqs2); // -> false
prereqsPossible(numCourses, prereqs1); // -> true