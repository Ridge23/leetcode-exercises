/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root == null) {
        return [];
    }

    let result = [];
    let stack = [];
    let node = root;
    let prev, current = null;

    if (root != null) {
        stack.push(node);

        while (stack.length > 0) {
            current = stack[stack.length-1];
            
            if (prev == null || prev.left == current || prev.right == current) {
                if (current.left != null) {
                    stack.push(current.left);
                } else if (current.right != null) {
                    stack.push(current.right);
                } else {
                    stack.pop();
                    result.push(current.val);
                }
            } else if (current.left == prev) {
                if (current.right != null) {
                    stack.push(current.right);
                } else {
                    stack.pop();
                    result.push(current.val);
                }
            } else if (current.right == prev) {
                stack.pop();
                result.push(current.val);
            }

            prev = current;
        }
    }

    return result;
};

module.exports = postorderTraversal;
