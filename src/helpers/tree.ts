export interface TreeNode {
  val: any;
  left: TreeNode;
  right: TreeNode;
}

/**
 *
0 1 2 3 4 5 6
left  of 0 -> 1
right of 0 -> 2
left  of 1 -> 3
right of 1 -> 4
left  of 2 -> 5
right of 2 -> 6
left  of n -> 2n + 1
right of n -> 2n + 2

 */

const _from = (arr: any[]): TreeNode => {
  const nodes = arr.map(x => {
    if (x != undefined && x != null) {
      return { val: x, left: null, right: null };
    } else {
      return null;
    }
  });

  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i]) continue;

    const left = i * 2 + 1;
    const right = i * 2 + 2;
    nodes[i].left = nodes[left];
    nodes[i].right = nodes[right];
  }

  return nodes[0];
};

const toArray = (root?: TreeNode): any[] => {
  if (!root) return [];
  let queue = [root];
  const arr: any = [];

  while (queue.length) {
    const node = queue[0];
    queue = queue.slice(1);

    arr.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return arr;
};

export const Tree = {
  from: _from,
  toArray,
};
