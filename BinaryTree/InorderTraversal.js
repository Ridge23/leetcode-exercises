/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var result = [];
    var stack = [];

    if (root == null) {
        return [];
    }

    var node = root;

    while (node != null) {
        stack.push(node);
        node = node.left;
    }

    while (stack.length > 0) {
        node = stack.pop();
        result.push(node.val);

        if (node.right != null) {
            node = node.right;

            while (node != null) {
                stack.push(node);
                node = node.left;
            }
        }
    }

    return result;
};

module.exports = inorderTraversal;