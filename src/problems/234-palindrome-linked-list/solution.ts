import { LinkedList } from "../../helpers";

const Solution = (head: LinkedList): boolean => {
  let result = true;
  let cursor = head;

  const recur = (node: LinkedList) => {
    if (!node) return;
    recur(node.next);
    if (node.val !== cursor.val) {
      result = false;
      return;
    }
    cursor = cursor.next;
  };
  recur(head);
  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
