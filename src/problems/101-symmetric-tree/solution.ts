import { TreeNode } from "../../helpers";


const Solution = (root: TreeNode): boolean => {

  const isMirror = (left: TreeNode, right: TreeNode): boolean => {
    if (!left && right || left && !right) return false;
    if (!left && !right) return true;

    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
  };

  return isMirror(root.left, root.right);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
