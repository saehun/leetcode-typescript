import { LinkedList } from "../../helpers/list";


/**
 * Naive solution
 */
const NaiveSolution = (headA: LinkedList, headB: LinkedList): LinkedList => {
  const map: any = {};
  let cursorA = headA;
  while (cursorA) {
    if (map[cursorA.val]) {
      map[cursorA.val].push(cursorA);
    } else {
      map[cursorA.val] = [cursorA];
    }
    cursorA = cursorA.next;
  }

  let cursorB = headB;
  while (cursorB) {
    if (map[cursorB.val] && map[cursorB.val].includes(cursorB)) return cursorB;
    cursorB = cursorB.next;
  }

  return null;
};

const Solution = (headA: LinkedList, headB: LinkedList): LinkedList => {
  return null;
};

export default {
  "default": Solution,
  NaiveSolution,
  validator: (x: LinkedList) => x.val,
};
