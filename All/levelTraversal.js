class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const treeLevelsRecursive = (root, result = [], index = 0) => {
  
  if(!root) return [];
    
  if (!result[index]) result[index] = [root.val]; 
  else result[index].push(root.val);

  treeLevels(root.left, result, index + 1);
  treeLevels(root.right, result, index + 1);
    
  return result;
};
const treeLevels = (root) => {
  
  if(!root) return [];
  let level = 0;
  let queue = [ { node: root, level: level } ];
  let result = [];
  
  while(queue.length) {
    const current = queue.shift();
    
    if (!result[current.level]) 
      result[current.level] = [current.node.val]; 
    else 
      result[current.level].push(current.node.val);

    if(current.node) {
      if(current.node.left)  queue.push({ node: current.node.left, level: current.level + 1 });
      if(current.node.right) queue.push({ node: current.node.right, level: current.level + 1 });
    }
  }
  return result;
};

const a = new Node("a"); const b = new Node("b"); const c = new Node("c");
const d = new Node("d"); const e = new Node("e"); const f = new Node("f");
const g = new Node("g"); const h = new Node("h"); const i = new Node("i");

a.left = b; a.right = c; b.left = d; b.right = e;
c.right = f; e.left = g; e.right = h; f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ]