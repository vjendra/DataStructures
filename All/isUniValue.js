class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUniValueList = (head, val) => {
  
  if(head.next === null) return true;
  
  if(head.val !== head.next.val) return false;
  
  return isUnivalueList(head.next, val);
};

const a = new Node(7); const b = new Node(7); const c = new Node(7);
a.next = b; b.next = c;

// 7 -> 7 -> 7

isUniValueList(a); // true