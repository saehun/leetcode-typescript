import { TreeNode } from "../../helpers";

const Solution = (t1: TreeNode, t2: TreeNode): TreeNode => {
  if (!t1) return t2;
  if (!t2) return t1;

  const root: TreeNode = { val: t1.val + t2.val, left: null, right: null };

  const accumulate = (n1: TreeNode, n2: TreeNode, newTree: TreeNode) => {
    if (!n1) return n2;
    if (!n2) return n1;

    if (n1.left || n2.left) {
      const val = (n1.left ? n1.left.val : 0) + (n2.left ? n2.left.val : 0);
      newTree.left = accumulate(n1.left, n2.left, { val, left: null, right: null });
    }

    if (n1.right || n2.right) {
      const val = (n1.right ? n1.right.val : 0) + (n2.right ? n2.right.val : 0);
      newTree.right = accumulate(n1.right, n2.right, { val, left: null, right: null });
    }

    return newTree;
  };

  return accumulate(t1, t2, root);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
