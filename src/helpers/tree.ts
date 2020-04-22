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
  const build = (node: TreeNode, index: number): TreeNode => {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    if (arr[leftIndex] !== undefined) {
      node.left = build({ val: arr[leftIndex], left: null, right: null }, leftIndex);
    }
    if (arr[rightIndex] !== undefined) {
      node.right = build({ val: arr[rightIndex], left: null, right: null }, rightIndex);
    }
    return node;
  };

  return build({ val: arr[0], left: null, right: null }, 0);
};

export const Tree = {
  from: _from,
};
