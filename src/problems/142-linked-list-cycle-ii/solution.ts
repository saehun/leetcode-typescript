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

const Solution = (head: LinkedList): LinkedList => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) break;
  }
  if (!fast?.next) return null;

  fast = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};

export default {
  "default": Solution,
  Floyd,
  validator: (x: any) => x?.val,
};
