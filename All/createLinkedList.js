class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const createLinkedListRecursive = (values, i = 0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  
  head.next = createLinkedList(values, i + 1);
  return head;
};

const createLinkedList = (values) => {
  let head = null;
  let current; 
  
  values.forEach(value => {
    const node = new Node(value);
    
    if(!head) {
      head = node;
      current = head;
    } else {
      current.next = node;
      current = current.next;
    }
  });

  return head;
};

createLinkedList(["h", "e", "y"]);
// h -> e -> y