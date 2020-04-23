import { LinkedList } from "../../helpers";

const Solution = (l1: LinkedList, l2: LinkedList): LinkedList => {
  if (!l1) return l2;
  if (!l2) return l1;
  let cursor1 = l1, cursor2 = l2;
  let end1 = false, end2 = false;
  let overflow = false;
  const head: LinkedList = { val: 0, next: null };
  let pointer = head;

  const addDigit = (a: number, b: number) => {
    const sum = a + b + (overflow ? 1 : 0);
    if (sum >= 10) {
      overflow = true;
    } else {
      overflow = false;
    }
    console.log(a, b, sum);
    return sum - (overflow ? 10 : 0);
  };

  while (!end1 || !end2) {
    pointer.next = { val: addDigit(cursor1.val, cursor2.val), next: null };
    pointer = pointer.next;

    if (cursor1.next === null) {
      end1 = true;
      cursor1 = { val: 0, next: null };
    } else {
      cursor1 = cursor1.next;
    }

    if (cursor2.next === null) {
      end2 = true;
      cursor2 = { val: 0, next: null };
    } else {
      cursor2 = cursor2.next;
    }

  }

  if (overflow) {
    pointer.next = { val: 1, next: null };
  }

  return head.next;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
