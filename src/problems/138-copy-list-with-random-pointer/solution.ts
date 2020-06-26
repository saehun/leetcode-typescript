type Node = {
  val: number;
  next: Node;
  random: Node;
  index?: number;
  randomIndex?: number;
}

const copyRandomList = function(head: Node) {
  let cur = head;
  let i = 0;
  const list: Node[] = [];
  while (cur !== null) { // mark index
    cur.index = i++;
    list.push({ val: cur.val, next: null, random: null });
    cur = cur.next;
  }

  cur = head;
  while (cur !== null) { // mark index
    if (cur.random) {
      cur.randomIndex = cur.random.index;
    }
    cur = cur.next;
  }

  cur = head;
  while (cur !== null) {
    list[cur.index].next = list[cur.index + 1] || null;
    list[cur.index].random = list[cur.randomIndex] || null;

    cur = cur.next;
  }
  return list[0];
};

export default {
  "default": copyRandomList,
  validator: (x: any) => x,
};
