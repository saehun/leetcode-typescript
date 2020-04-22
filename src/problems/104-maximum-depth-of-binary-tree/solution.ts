import { TreeNode } from "../../helpers";

const Solution = (root: TreeNode): number => {
  let max = 0;
  const traverse = (node: TreeNode, depth: number) => {
    const { left, right } = node;
    max = Math.max(max, depth);

    left && traverse(left, depth + 1);
    right && traverse(right, depth + 1);
  };

  root && traverse(root, 1);
  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
