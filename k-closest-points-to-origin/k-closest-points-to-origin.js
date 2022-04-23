/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */


class maxheap {
    
    constructor() {
        this.list = new Array()
    }
    
    size = () => {
        return this.list.length
    }
    
    getmax = () => {
        return this.list[0]
    }
    
    distance = (i) => {
        let p = this.list[i]
        return Math.sqrt( (p[0]*p[0]) + (p[1]*p[1]))
    }
    
    swap = (i,j) => {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    
    heapify = ( i ) => {
        let largest = i
        let left = ( 2* i) + 1
        let right = left + 1
        
        let len = this.size()
    
        
        
        let d_largest = this.distance(largest)
        
        if( left < len ) {
            let d_left = this.distance(left)
            if( d_left > d_largest ) {
                largest = left
            }
            
        }
        
        d_largest = this.distance(largest)
        if( right < len  ) {
            let d_right = this.distance(right)
            if( d_right > d_largest) {
                largest = right
            }
            
        }
        
        if( largest !=i ) {
            this.swap(i,largest)
            this.heapify(largest)
        }        
    }
    
    insert = ( p ) => {
        let len = this.size()
        
        if( len == 0 ) {
            this.list.push(p)
        }
        else {
            this.list.push(p)
            for( let i = parseInt(this.size()/2) - 1; i>=0; i--) {
                this.heapify(i)
            }
        }
    }
}


var kClosest2 = function(points, k) {
    
    let heap = new maxheap()
    
    for( let i = 0; i < k; i++) {
        let p = points[i]
        heap.insert(p)
    }
    
    for( let i=k; i<points.length; i++) {
        let p = points[i]
        let d = Math.sqrt( (p[0]*p[0]) + (p[1]*p[1]))
        if(d > heap.distance(0) ) {
            continue
        }
        else {
            heap.swap(0, heap.size()-1)
            heap.list.pop()
            heap.insert(p)
        }
    }
    
    let op = []
    for( let i = 0; i < k; i++) {
        op.push( heap.list[i])
    }
    
    return op
    
};


var kClosest = function(points, k) {
    
    let distance = []
    for( let p of points ) {
        
        let d = Math.sqrt( (p[0]*p[0]) + (p[1]*p[1]))
        let obj = {
            distance: d,
            point: p
        }
        distance.push(obj)
    }
    
    distance.sort( function(o1,o2) { return o1.distance-o2.distance})
    
    let op = []
    for( let i = 0; i < k; i++) {
        op.push( distance[i].point)
    }
    
    return op
    
};