class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValueRecursive = (head, index) => {
  if(head === null) return null;
  if(index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};

const getNodeValue = (head, index) => {
  let current = head, count = 0;
  while(current !== null) {
    if(index === count) return current.val;
    count++;
    current = current.next;
  }
  return null;
};

const a = new Node("a"); const b = new Node("b");
const c = new Node("c"); const d = new Node("d");

a.next = b; b.next = c; c.next = d;

// a -> b -> c -> d

getNodeValue(a, 3); // 'd'