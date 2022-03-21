
//iterative o(n2), with O(1) complexity
var printLinkedListInReverse = function(head) {
    
    let p = head
    let j = null
    let prev = null
    let i = p
    while(i!=j) {
        let p = i
        while(p && p != j ) {
            prev = p
            p = p.getNext()
        }
        j = prev
        j.printValue()
    }
    
};

//recursive O(n),O(n) auxiliary space
var printLinkedListInReverse = function(head) {
    
    let reversePrint = function(p) {
        if(p.getNext() === null) {
            p.printValue()
            return
        }
        reversePrint(p.getNext())
        p.printValue()
    }
    reversePrint(head)
};