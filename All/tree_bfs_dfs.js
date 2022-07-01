class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
const breadthFirst = (root) => {
    const queue = [ root ];
    
    while(queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value);
        if(currentNode.left !== null)
            queue.push(currentNode.left);
        if(currentNode.right !== null)
            queue.push(currentNode.right);
    }
}
const depthFirst = (root) => {
    const stack = [ root ];

    while(stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode.value);
        if(currentNode.right !== null)
            stack.push(currentNode.right);
        if(currentNode.left !== null)
            stack.push(currentNode.left);
    }
}
const preOrder = (root) => {
    if(root === null) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}
const postOrder = (root) => {
    if(root === null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
}
const inOrder = (root) => {
    if(root === null) return;
    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
}
const a = new Node(40); const b = new Node(30); const c = new Node(50); const d = new Node(25); 
const e = new Node(35); const f = new Node(45); const g = new Node(60); 
a.left = b; a.right = c; b.left = d; b.right = e; c.left = f; c.right = g;

/*      40
       /  \
      30   50
     / \   / \
    25 35 45 60
*/

// console.log('Breadth First');
// breadthFirst(a);
// console.log('Depth First');
// depthFirst(a);
console.log('Pre Order');
preOrder(a);
console.log('Post Order');
postOrder(a);
console.log('In Order');
inOrder(a);