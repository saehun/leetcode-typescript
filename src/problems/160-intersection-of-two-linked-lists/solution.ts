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

/**
 * Time: O(n), Space: O(1)
 */
const Solution = (headA: LinkedList, headB: LinkedList): LinkedList => {
  let cursorA = headA;
  let lengthA = 0;
  while (cursorA) {
    lengthA++;
    cursorA = cursorA.next;
  }

  let cursorB = headB;
  let lengthB = 0;
  while (cursorB) {
    lengthB++;
    cursorB = cursorB.next;
  }

  cursorA = headA;
  cursorB = headB;
  for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
    if (lengthA > lengthB) {
      cursorA = cursorA.next;
    } else {
      cursorB = cursorB.next;
    }
  }

  for (let i = 0; i < Math.min(lengthA, lengthB); i++) {
    if (cursorA === cursorB) return cursorA;
    cursorA = cursorA.next;
    cursorB = cursorB.next;
  }

  return null;
};


/**
 * O(n) simple (Javasciprt's Set implementation using Hashmap so that Set.has method is O(1))
 */
const Simple = (headA: LinkedList, headB: LinkedList): LinkedList => {
  let cursorA = headA;
  let cursorB = headB;

  const lists = new Set();

  while (cursorA) {
    lists.add(cursorA);
    cursorA = cursorA.next;
  }

  while (cursorB) {
    if (lists.has(cursorB)) return cursorB;
    cursorB = cursorB.next;
  }

  return null;
};

export default {
  "default": Solution,
  NaiveSolution,
  Simple,
  validator: (x: LinkedList) => x.val,
};
