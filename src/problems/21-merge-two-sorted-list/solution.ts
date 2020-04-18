import { List, LinkedList } from "../../helpers";



/**
 * Naive solution
 */
const Solution = (l1: LinkedList, l2: LinkedList): LinkedList => {
  let head, tail, l1Pointer, l2Pointer;
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    head = l1;
    tail = l1;
    l1Pointer = head.next;
    l2Pointer = l2;
  } else {
    head = l2;
    tail = l2;
    l1Pointer = l1;
    l2Pointer = l2.next;
  }

  // eslint-disable-next-line
  while (true) {
    if (!l1Pointer) {
      tail.next = l2Pointer;
      break;
    }
    if (!l2Pointer) {
      tail.next = l1Pointer;
      break;
    }

    if (l1Pointer.val < l2Pointer.val) {
      tail.next = l1Pointer;
      tail = tail.next;
      l1Pointer = l1Pointer.next;
    } else {
      tail.next = l2Pointer;
      tail = tail.next;
      l2Pointer = l2Pointer.next;
    }
  }
  return head;
};

export default {
  "default": Solution,
  validator: List.toString,
};
