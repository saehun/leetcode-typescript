import { LinkedList } from "../../helpers/list";
const Solution = (head: LinkedList): LinkedList => {
  if (!head || !head.next) return head;

  let cursor = head;
  let pointer = null;
  while (cursor) {
    const next = cursor.next;
    cursor.next = pointer;
    pointer = cursor;
    cursor = next;
  }
  return pointer;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
