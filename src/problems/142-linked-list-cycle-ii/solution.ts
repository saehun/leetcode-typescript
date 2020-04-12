interface LinkedList {
  val: number;
  next: LinkedList;
}


const Floyd = (head: LinkedList): LinkedList => {
  if (!head || head.next === null) return null;

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) break;
  }

  if (slow !== fast) return null;

  slow = head;
  while (slow !== fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};

export default {
  "default": Floyd,
  Floyd,
};
