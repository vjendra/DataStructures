class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValuesRecursive = (head, arr = []) => {
  if(head == null) return [];
  arr.push(head.val);
  linkedListValues(head.next, arr);
  return arr;
};

const linkedListValues = (head) => {
  let arr = [];
  let current = head;
  while(current != null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

const a = new Node("a"); const b = new Node("b"); 
const c = new Node("c");const d = new Node("d");

a.next = b; b.next = c; c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]