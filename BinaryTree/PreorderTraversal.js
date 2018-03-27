/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    var result = [];
    var stack = [];

    if (root != null) {
        stack.push(root);

        while (stack.length > 0) {
            var mynode = stack.pop();

            result.push(mynode.val);

            if (mynode.right !== null) {
                stack.push(mynode.right);
            }

            if (mynode.left !== null) {
                stack.push(mynode.left);
            }
        }
    }

    return result;
};

module.exports = preorderTraversal;