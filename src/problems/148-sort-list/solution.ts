type Node = {
  val: number;
  next: Node;
}

/**
 * Insertion Sort
 */
const insertBefore = (target: Node, node: Node, prevTarget: Node, prevNode: Node) => {
  if (!prevNode) return;
  if (prevTarget) {
    prevTarget.next = node;
  }
  prevNode.next = node.next;
  node.next = target;
};

const insertionSort = (input: Node) => {
  let head = input;
  let node = input;
  let prevNode = null;
  let prePrevNode = null;
  while (node) {
    let target = head;
    let prevTarget = null;
    let switched = false;
    const next = node.next;
    /* console.log(chalk.yellowBright(`PICK(${node.val})`), JSON.stringify(head)); */

    while (target) {
      if (target === node) break;
      if (target.val >= node.val) {
        /* console.log("INSERT_BEFORE::", { target, node, prevTarget, prevNode }); */
        insertBefore(target, node, prevTarget, prevNode);
        switched = true;
        if (prevTarget === null) head = node;
        break;
      }
      prevTarget = target;
      target = target.next;
    }


    if (switched) {
      prevNode = prePrevNode;
    } else {
      prevNode = node;
    }

    if (prevNode) {
      prePrevNode = prevNode;
    }
    node = next;
    /* console.log("-------------"); */
  }
  return head;
};

const dumbSort = (head: Node) => {
  const arr = [];
  let cursor = head;
  while (cursor) {
    arr.push(cursor.val);
    cursor = cursor.next;
  }
  return arr.sort((a, b) => a - b).reduceRight((acc: any, n) => ({ val: n, next: acc }), null);
};

const logger = (head: any) => {
  let node = head;
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr.join("-");
};


const executor = (args: any) => {
  const result = dumbSort(args);
  return logger(result);
};


export default {
  "default": executor,
  executor,
  validator: logger,
};
