class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const insertNode = (head, value, index) => {
  
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  let current = head;
  let newNode = new Node(value);
  let idx = 0;
  
  while(current !== null) {
      
    if(idx === index - 1) {
      const next = current.next;
      current.next = newNode;
      current.next.next = next;
    }
    idx++;
    current = current.next;
  }
  
  return head;
};

const a = new Node("a"); const b = new Node("b");
const c = new Node("c"); const d = new Node("d");
// a -> b -> c -> d
a.next = b; b.next = c; c.next = d;

insertNode(a, 'm', 4);
// a -> b -> c -> d -> m