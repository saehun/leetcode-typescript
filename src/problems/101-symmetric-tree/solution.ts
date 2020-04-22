import { TreeNode } from "../../helpers";


/**
 *
          0
   1          2        == 2**1-1 to 2**2-2
 3   4     5     6     == 2**2-1 to 2**3-2
7 8 9 10 11 12 13 14   == 2**3-1 to 2**4-2
1 -> 2  (1,2)
3 -> 6  (3,4,5,6)
4 -> 5

 */

const Solution = (root: TreeNode): boolean => {
  let result = true;
  if (!root) return true;

  const traverse = (left: TreeNode, right: TreeNode) => {
    if (left === null || right === null) {
      if (left !== right) result = false;
      return;
    }

    if (left.val !== right.val) {
      result = false;
      return;
    }
    traverse(left.left, right.right);
    traverse(left.right, right.left);
  };

  traverse(root.left, root.right);

  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
