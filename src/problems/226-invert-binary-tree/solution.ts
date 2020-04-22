import { TreeNode } from "../../helpers";

const invertTree = (root: TreeNode): TreeNode => {
  if (!root) return null;
  const { left, right } = root;
  root.left = invertTree(right);
  root.right = invertTree(left);
  return root;
};

export default {
  "default": invertTree,
  validator: (x: any) => x,
};
