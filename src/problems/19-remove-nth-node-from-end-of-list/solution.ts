import { LinkedList } from "../../helpers";

const Solution = (head: LinkedList, n: number) => {
  let cursor = head;
  let prevCursor = head;
  for (let i = 0; i <= n; i++) {
    prevCursor = { val: undefined, next: prevCursor };
  }

  while (cursor) {
    prevCursor = prevCursor.next;
    cursor = cursor.next;
  }

  if (prevCursor.next === head) {
    head = prevCursor.next.next;
  }
  prevCursor.next = prevCursor.next.next;
  return head;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
