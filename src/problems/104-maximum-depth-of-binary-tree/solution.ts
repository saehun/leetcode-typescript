import { TreeNode } from "../../helpers";

const Solution = (root: TreeNode): number => {
  let max = 0;
  const dfs = (node: TreeNode, depth: number) => {
    if (!node) return;
    max = Math.max(max, depth);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 1);

  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
