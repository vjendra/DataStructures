class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {

  let maxStreak = 0;
  let currentStreak = 1;
  let current = head;
  let prevVal = null;

  while(current !== null) {
    
    if(current.val === prevVal) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }
    
    maxStreak = Math.max(currentStreak, maxStreak);
    prevVal = current.val;
    current = current.next;
  }
  
  return maxStreak;
  
};

const a = new Node(9); const b = new Node(9); const c = new Node(1); 
const d = new Node(9); const e = new Node(9); const f = new Node(9);

a.next = b; b.next = c; c.next = d; d.next = e; e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

longestStreak(a); // 3