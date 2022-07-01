const zipperLists = (head1, head2) => {

  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }
  
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
  
  return head1;
};

const a = new Node("a"); const b = new Node("b"); const c = new Node("c");
// a -> b -> c

const x = new Node("x"); const y = new Node("y"); const z = new Node("z");
// x -> y -> z

a.next = b; b.next = c; x.next = y; y.next = z;

zipperLists(a, x);
// a -> x -> b -> y -> c -> z