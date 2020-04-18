import { List, LinkedList } from "../../helpers";



/**
 * Naive solution
 */
const Solution = (l1: LinkedList, l2: LinkedList): LinkedList => {
  const head: any = { next: null };
  let tail = head;
  let l1Pointer = l1;
  let l2Pointer = l2;

  while (l1Pointer !== null && l2Pointer !== null) {
    if (l1Pointer.val > l2Pointer.val) {
      tail.next = l2Pointer;
      l2Pointer = l2Pointer.next;
    } else {
      tail.next = l1Pointer;
      l1Pointer = l1Pointer.next;
    }
    tail = tail.next;
  }
  tail.next = l1Pointer === null ? l2Pointer : l1Pointer;
  return head.next;
};


const Short = (l1: LinkedList, l2: LinkedList) => {
  /**
   * Short coding
   */
  const toArray = (head: LinkedList, arr: any[]): any[] => head ? (arr.push(head.val), toArray(head.next, arr)) : arr;
  const toList = (arr: any[]): LinkedList => arr.length === 0 ? null : ({ val: arr[0], next: toList(arr.slice(1)) });
  return toList([...toArray(l1, []), ...toArray(l2, [])].sort((a, b) => a - b));
};

export default {
  "default": Solution,
  validator: List.toString,
  Short,
};
