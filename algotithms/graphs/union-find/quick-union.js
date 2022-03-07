class UnionFind {
    
    constructor(size) {
        this.root_array = new Array(size)
        this.size = size
        for( let i = 0; i < this.size; i++) {
            this.root_array[i] = i
        }
    }
    
    find(x) {
        while(this.root_array[x] != x) {
            x = this.root_array[x]
        }
        return x
    }
    
    union(x,y) {
        let root_x = this.find(x)
        let root_y = this.find(y)
        
        if(root_x != root_y) {
            this.root_array[root_y] = root_x
        }
    }
    
    isconnected(x,y) {
        return this.find(x) == this.find(y)
    }
    
    
}

let uf = new UnionFind(10);
        // 1-2-5-6-7 3-8-9 4
        uf.union(1, 2);
        uf.union(2, 5);
        uf.union(5, 6);
        uf.union(6, 7);
        uf.union(3, 8);
        uf.union(8, 9);

console.log(uf.isconnected(1,5))
console.log(uf.isconnected(5,7))
console.log(uf.isconnected(4,9))
uf.union(9, 4)
console.log(uf.isconnected(4,9))





