/**
 * Definition for polynomial singly-linked list.
 * function PolyNode(x=0, y=0, next=null) {
 *     this.coefficient = x;
 *     this.power = y;
 *     this.next = next;
 * }
 */

/**
 * @param {PolyNode} poly1
 * @param {PolyNode} poly2
 * @return {PolyNode}
 */
var addPoly = function(poly1, poly2) {
    
    let p1 = poly1
    let p2 = poly2
    
    let newhead = null, newtail = null
    
    while(p1 && p2) {
        let c1 = p1.coefficient
        let c2 = p2.coefficient
        let pow1 = p1.power
        let pow2 = p2.power
        
        //console.log(c1,c2)
        //console.log(pow1,pow2)
        //case 1
        if(c1 + c2 == 0 && pow1 == pow2) {
            p1 = p1.next
            p2 = p2.next
            continue
        }
        //if powers are equal
        if(pow1 == pow2) {
            let c = c1 + c2
            if(newhead == null) {
                newhead = new PolyNode(c,pow1)
                newtail = newhead
            } else {
                newtail.next =  new PolyNode(c,pow1)
                newtail = newtail.next
            }
            p1 = p1.next
            p2 = p2.next
            continue
        }
        
        if(pow1 > pow2) {
            if(newhead == null) {
                newhead = new PolyNode(c1,pow1)
                newtail = newhead
            } else {
                newtail.next =  new PolyNode(c1,pow1)
                newtail = newtail.next
            }
            p1 = p1.next
            continue
        }
        else {
            if(newhead == null) {
                newhead = new PolyNode(c2,pow2)
                newtail = newhead
            } else {
                newtail.next =  new PolyNode(c2,pow2)
                newtail = newtail.next
            }
            p2 = p2.next
            continue
        }
    }
    
    while(p1) {
        let c1 = p1.coefficient
        let pow1 = p1.power
        if(newhead == null) {
                newhead = new PolyNode(c1,pow1)
                newtail = newhead
        } else {
                if(newhead.power < pow1) {
                    let node = new PolyNode(c1,pow1)
                    node.next = newhead
                    newhead = node
                } else {
                    newtail.next =  new PolyNode(c1,pow1)
                    newtail = newtail.next 
                }
                
        }
        p1 = p1.next
    }
    
    while(p2) {
        let c2 = p2.coefficient
        let pow2 = p2.power
        if(newhead == null) {
                newhead = new PolyNode(c2,pow2)
                newtail = newhead
        } else {
               if(newhead.power < pow2) {
                    let node = new PolyNode(c2,pow2)
                    node.next = newhead
                    newhead = node
                } else {
                    newtail.next =  new PolyNode(c2,pow2)
                    newtail = newtail.next 
                }
        }
        p2 = p2.next
    }
    return newhead
};