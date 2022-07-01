const hasPathRecursive = (graph, src, dst) => {

  if(src === dst) return true;

  graph[src].forEach( node => hasPath(graph, node, dst) );

  return false;

};

const hasPath = (graph, src, dst) => {
  
  const queue = [ src ];
  
  while(queue.length > 0) {
    const current = queue.shift();
    if( current === dst ) return true;

    for(let node of graph[current])
      queue.push(node);
  }

  return false;
};

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'i', 'h'); //true