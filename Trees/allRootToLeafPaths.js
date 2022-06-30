class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const allTreePaths = (root) => {
  if(!root) return [];
  if(!root.left && !root.right) return [ [root.val] ];
  
  let result = [];
  
  const left = allTreePaths(root.left);
  left.forEach(l => result.push([root.val, ...l]))
  
  const right = allTreePaths(root.right);
  right.forEach(l => result.push([root.val, ...l]))

  return result;
  
};

const a = new Node('a'); const b = new Node('b'); const c = new Node('c');
const d = new Node('d'); const e = new Node('e'); const f = new Node('f');
const g = new Node('g'); const h = new Node('h'); const i = new Node('i');

a.left = b; a.right = c; b.left = d; b.right = e;
c.right = f; e.left = g; e.right = h; f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /   
//     g  h   i 

allTreePaths(a); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e', 'g' ], 
//   [ 'a', 'b', 'e', 'h' ], 
//   [ 'a', 'c', 'f', 'i' ] 
// ] 