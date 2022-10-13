/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

abstract class Node {
    public abstract int evaluate();
    // define your fields here
};


/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input 
 * and returns the expression tree represnting it as a Node.
 */

class TreeNode extends Node {
    public String data;
    public TreeNode left;
    public TreeNode right;
    
    public TreeNode(String data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    public  int evaluate() {
        HashSet<String> set = new  HashSet<String>();
        set.add("+");
        set.add("-");
        set.add("/");
        set.add("*");
        
        if(set.contains(this.data) == false) {
            return Integer.parseInt(this.data);
        }
        
        int lv = this.left.evaluate();
        int rv = this.right.evaluate();
        String sign = this.data;
        if(sign.equals("+")) {
            return lv + rv;
        } else if(sign.equals("-")) {
            return lv - rv;
        }else if(sign.equals("*")) {
            return lv * rv;
        }else  {
            return lv / rv;
        }
    } 
}

class TreeBuilder  {
    
    Node buildTree(String[] postfix) {
        HashSet<String> set = new  HashSet<String>();
        set.add("+");
        set.add("-");
        set.add("/");
        set.add("*");
        LinkedList<TreeNode> stack = new LinkedList<TreeNode>();
        for(String value : postfix) {
            if(set.contains(value)) {
                TreeNode node = new TreeNode(value);
                node.right = stack.pollLast();
                node.left = stack.pollLast();
                stack.add(node);
            } else {
                TreeNode node = new TreeNode(value);
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