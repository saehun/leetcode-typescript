import { LinkedList } from "../../helpers/list";

const Solution = (headA: LinkedList, headB: LinkedList): LinkedList => {
  const map: any = {};
  let cursorA = headA;
  while (cursorA) {
    map[cursorA.val] = true;
    cursorA = cursorA.next;
  }

  let cursorB = headB;
  while (cursorB) {
    if (map[cursorB.val]) return cursorB;
    cursorB = cursorB.next;
  }

  return null;
};

export default {
  "default": Solution,
  validator: (x: LinkedList) => x.val,
};
