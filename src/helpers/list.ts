const toList = (arr: any[]) => {
  return arr.reduceRight((acc, n) => {
    return { val: n, next: acc };
  }, null);
};


const toString = (head: any) => {
  let node = head;
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr.join("-");
};

export type LinkedList = {
  val: any;
  next: LinkedList;
}

export const List = {
  toList,
  toString
};
