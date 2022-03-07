class unionfind {
    constructor(size) {
        this.size = size
        this.root_array = new Array(size)
        for( let i = 0; i < size; i++) {
            this.root_array[i] = i
        }
    }
    
    find(v) {
        return this.root_array[v]
    }
    
    union(v1,v2) {
        let root_v1 = this.find(v1)
        let root_v2 = this.find(v2)
        if(root_v1 != root_v2) {c
            for( let i = 0; i < this.size; i++) {
               
                if( (this.root_array[i]) == root_v2) {
                    this.root_array[i] = root_v1
                }
            }
        }
    }
    
    isconnected(v1,v2) {
        return this.find(v1) == this.find(v2)
    }
}


let uf = new unionfind(10)
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);

console.log(uf.isconnected(1,5))
console.log(uf.isconnected(5,7))
console.log(uf.isconnected(4,9))
uf.union(9, 4);
console.log(uf.isconnected(4,9))



