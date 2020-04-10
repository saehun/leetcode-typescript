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

export default {
  "default": Floyd,
  Floyd,
  Flag,
};
