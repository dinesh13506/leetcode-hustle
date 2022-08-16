class DllNode {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DLL {
    constructor() {
        this.head = new DllNode(-1)
        this.tail = new DllNode(-1)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0
    }
    
    insert(currNode) {
        let prevNode = this.tail.prev
        let nextNode = this.tail
        currNode.next = nextNode
        currNode.prev = prevNode
        prevNode.next = currNode
        nextNode.prev = currNode
        this.size++
    }
    
    delete(currNode) {
        let prevNode = currNode.prev
        let nextNode = currNode.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        this.size--
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    
    let answer = []
    const n = nums.length
    let dll = new DLL()
    for(let i = 0; i < k; i++) {
        //console.log(dll)
        while(dll.size && dll.head.next.value <= i - k ) {
            let front = dll.head.next
            dll.delete(front)
        }
        while(dll.size > 0 && nums[dll.tail.prev.value] < nums[i]) {
            let back = dll.tail.prev
            dll.delete(back)
        }
        let currNode = new DllNode(i)
        dll.insert(currNode)
    }
    
    answer.push(nums[dll.head.next.value])
    for(let i = k; i < n; i++) {
        while(dll.size && dll.head.next.value <= i - k ) {
            let front = dll.head.next
            dll.delete(front)
        }
        let currNode = new DllNode(i)
        while(dll.size > 0 && nums[dll.tail.prev.value] < nums[i]) {
            let back = dll.tail.prev
            dll.delete(back)
        }
        dll.insert(currNode)
        answer.push(nums[dll.head.next.value])
    }
    return answer
};