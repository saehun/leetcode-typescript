import { TreeNode } from "../../helpers";

const Solution = (root: TreeNode, sum: number): number => {
  let count = 0;

  const traverse = (node: TreeNode, sums: number[]) => {
    if (!node) return;

    const next = [node.val];
    if (node.val === sum) count++;
    for (let i = 0; i < sums.length; i++) {
      const val = sums[i] + node.val;
      if (val === sum) count++;
      next.push(val);
    }

    traverse(node.left, next);
    traverse(node.right, next);
  };
  traverse(root, []);
  return count;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
