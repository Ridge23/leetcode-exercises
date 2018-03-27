var TreeNode = require('./BinaryTree/TreeNode');
var preorderTraversal = require('./BinaryTree/PreorderTraversal');
var inorderTraversal = require('./BinaryTree/InorderTraversal');
var postorderTraversal = require('./BinaryTree/PostorderTraversal');

let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(preorderTraversal(tree));
console.log(inorderTraversal(tree));
console.log(postorderTraversal(tree));