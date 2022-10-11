/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

abstract class Node {
    public abstract int evaluate();
    // define your fields here
};


class TreeNode extends Node {
     public String data;
     public TreeNode left;
     public TreeNode right;
     public TreeNode(String data) {
         this.data = data;
         this.left = null;
         this.right = null;
     }
     public int evaluate() {
         if(this.left == null && this.right == null) {
             return Integer.parseInt(this.data);
         }
         int lv = this.left.evaluate();
         int rv = this.right.evaluate();
         
         if(this.data.equals("+")) {
             return lv + rv;
         } else if(this.data.equals("-")) {
             return lv - rv;
         } else if(this.data.equals("*")) {
             return lv * rv;
         } else  {
             return lv / rv;
         }
     }
}


/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input 
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder {
    Node buildTree(String[] postfix) {
        LinkedList<TreeNode> stack = new LinkedList<TreeNode>();
        int n = postfix.length;
        HashSet<String> set = new  HashSet<String>();
        set.add("+");
        set.add("-");
        set.add("*");
        set.add("/");
        for(int i = 0; i < n; i++) {
            String curr = postfix[i];
            if(set.contains(curr)) {
                TreeNode node = new TreeNode(curr);
                node.right = stack.pollLast();
                node.left = stack.pollLast();
                stack.add(node);
            } else {
                TreeNode node = new TreeNode(curr);
                stack.add(node);
            }
        }
        return stack.pollLast();
    }
};


/**
 * Your TreeBuilder object will be instantiated and called as such:
 * TreeBuilder obj = new TreeBuilder();
 * Node expTree = obj.buildTree(postfix);
 * int ans = expTree.evaluate();
 */