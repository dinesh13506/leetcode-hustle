
class UnionFind {
    constructor(size) {
        this.size = size
        this.representative = new Array(size)
        this.rank = new Array(size)

        for( let i = 0; i < size; i++) {
            this.reprentative[i] = i
            this.rank[i] = 0
        }
    }

    find(x) {
        let reprentative_x = this.representative[x]
        if(reprentative_x == x) {
            return x
        }
        return this.find(reprentative_x)
    }

    union(x,y) {
        let reprentative_x = this.find(x)
        let reprentative_y = this.find(y)
        if(reprentative_x != reprentative_y) {
            if(rank[representative_x] > rank[representative_y]) {
                this.representative[reprentative_y] = representative_x
            } else if(rank[representative_y] > rank[reprentative_x] ) {
                this.representative[reprentative_x] = reprentative_y
            } else {
                this.representative[reprentative_y] = representative_x
                this.rank[representative_x]++
            }
        }
    }
}