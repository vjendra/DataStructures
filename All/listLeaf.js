class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const leafList = (root, result = []) => {
  if(!root) return [];
  if(!root.left && !root.right) result.push(root.val);
  
  leafList(root.left, result);
  leafList(root.right, result);
  
  return result;
};
const a = new Node(5); const b = new Node(11); const c = new Node(54);
const d = new Node(20); const e = new Node(15); const f = new Node(1);
const g = new Node(3);

a.left = b; a.right = c; b.left = d;
b.right = e; e.left = f; e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

leafList(a);