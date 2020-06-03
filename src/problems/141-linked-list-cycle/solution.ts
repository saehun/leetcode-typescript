interface LinkedList {
  val: number;
  next: LinkedList;
  visit?: boolean;
}

const Flag = (head: LinkedList): boolean => {
  if (!head.next) return false;
  if (head.next.visit) return true;
  head.visit = true;
  return Flag(head.next);
};

const Floyd = (head: LinkedList): boolean => {
  let cur = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    cur = cur.next;
    if (cur === fast) return true;
  }
  return false;
};

const Solution = (head: LinkedList): boolean => {
  if (!head) return false;
  if (head && !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast?.next?.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};








export default {
  "default": Solution,
  Floyd,
  Flag,
  validator: (x: any) => x,
};
