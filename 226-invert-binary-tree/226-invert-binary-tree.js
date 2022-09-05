/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const q = [root];
    
    while (q.length) {
        const n = q.pop();
    if (n !== null && n?.left || n?.right) {
            [n.left, n.right] = [n.right, n.left];
            q.push(n.left, n.right);
        }
    }
    return root;
};