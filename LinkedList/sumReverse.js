class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const addLists = (head1, head2) => {

let head3 = null;
  let current3 = head3;
  let current1 = head1;
  let current2 = head2;
  let num1 = ''; 
  let num2 = '';
  let result;
  
  
  while(current1 !== null && current2 !== null) {
    if(current1) {
      num1 += current1.val;
      current1 = current1.next;
    }
    if(current2) {
      num2 += current2.val;
      current2 = current2.next;
    }
  }
  
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  result = ((num1 + num2) + '');
  
  let i = result.length;
  
  while(i >= 0) {
    if(!head3) {
      head3 = new Node(result[i]);
      current3 = head3;
    } else {
      current3.next = new Node(result[i]);
      current3 = current3.next;
    }
  }
  
  return head3;
};

const a1 = new Node(1); const a2 = new Node(2); const a3 = new Node(6);
a1.next = a2; a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4); const b2 = new Node(5); const b3 = new Node(3);
b1.next = b2; b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9