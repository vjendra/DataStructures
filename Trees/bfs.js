class Node {  
    constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const breadthFirstValues = (root) => {
  
  if (!root) return [];
  let arr = [];
  let queue = [ root ];
  
  while(queue.length) {
    current = queue.shift();
    arr.push(current.val);
    
    if(current.left)  queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  
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

breadthFirstValues(a); 
// -> ['a', 'b', 'c', 'd', 'e', 'f']