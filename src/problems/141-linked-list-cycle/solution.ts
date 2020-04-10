interface LinkedList {
  val: number;
  next: LinkedList;
  visit?: boolean;
}

const Solution = (head: LinkedList): boolean => {
  if (!head || !head.next) return false;
  if (head.next.visit) return true;
  head.visit = true;
  return Solution(head.next);
};

export default {
  "default": Solution,
};
