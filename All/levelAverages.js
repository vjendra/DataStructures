class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const levelAverages = (root, result = [], level = 0) => {
  
  if(!root) return [];
  
  if(!result[level]) result[level] = [ root.val ];
  else result[level].push(root.val);
  
  levelAverages(root.left, result, level + 1);
  levelAverages(root.right, result, level + 1);
  
  return result.map(r => r = r.reduce((prev, curr) => prev + curr, 0)/r.length);
  
};

const a = new Node(-1); const b = new Node(-6); const c = new Node(-5);
const d = new Node(-3); const e = new Node(0); const f = new Node(45);
const g = new Node(-1); const h = new Node(-2);

a.left = b; a.right = c; b.left = d; b.right = e;
c.right = f; e.left = g; f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0     45
//     /       \
//    -1       -2

levelAverages(a); // -> [ -1, -5.5, 14, -1.5 ]