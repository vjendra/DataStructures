class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
};

const a = new Node(12); const b = new Node(6);
const c = new Node(6); const d = new Node(4);
const e = new Node(6); const f = new Node(12);

a.left = b; a.right = c; b.left = d;
b.right = e; c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a,  6); // -> 3