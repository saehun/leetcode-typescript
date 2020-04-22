import { TreeNode } from "../../helpers";

const Solution = (root: TreeNode): number => {
  let max = 0;
  const traverse = (node: TreeNode, depth: number): number => {
    const left = node.left ? traverse(node.left, depth + 1) : depth;
    const right = node.right ? traverse(node.right, depth + 1) : depth;
    max = Math.max(max, left + right - 2 * depth);
    return Math.max(left, right);
  };

  root && traverse(root, 0);
  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
