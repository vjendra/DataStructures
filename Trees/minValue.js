class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const treeMinValueRecursive = (root) => {
  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left);
  const smallestRightValue = treeMinValue(root.right);
  return Math.min(root.val, smallestLeftValue, smallestRightValue);
};
const treeMinValue = (root) => {
  let queue = [ root ];
  let min = Infinity;
  while(queue.length) {
    current = queue.shift();
    if(current.val < min) min = current.val;
    if(current.left)  queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return min;
};