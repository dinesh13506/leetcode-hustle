

let inoder = function(root) {
    let traversal = []
    let curr = root
    while(curr != null) {
        if(curr.left == null) {
            traversal.push(curr.val)
            curr = curr.right
        } else {
            let prev = curr.left
            while(prev && prev.right!= curr) {
                prev = prev.right
            }
            if(prev.right == null) {
                prev.right = curr
                curr = curr.left
            } else {
                prev.right = null
                traversal.push(curr.val)
                curr = curr.right
            }
        }
    }
}