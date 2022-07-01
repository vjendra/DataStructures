class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const depthFirstValues = (root) => {

    if(!root) return [];
    let arr = [];
    let stack = [ root ];
    let current = root;
  
    while (stack.length) {
      current = stack.pop();
      arr.push(current.val);
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
    }
    return arr;
};

const depthFirstRecursiveValues = (root, arr = []) => {
 if(!root) return [];
  arr.push(root.val);
  depthFirstValues(root.left, arr);
  depthFirstValues(root.right, arr);
  return arr;
};
const a = new Node('a'); const b = new Node('b'); const c = new Node('c');
const d = new Node('d'); const e = new Node('e'); const f = new Node('f');

a.left = b; a.right = c; b.left = d; b.right = e; c.right = f; 
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a); 