class UnionFind {
    constructor(size) {
        this.size = 0
        this.parent = new Array(size)
        this.rank = new Array(size)

        for( let i = 0; i < length; i++) {
            this.parent[i] = i
            this.rank[i] = 0
        }
    }

    find(x) {
        if( x == this.parent[x]) {
            return x
        }
        this.parent[x] = this.find(this.parent[x])
        return this.parent[x]
    }

    uinion(x,y) {
        let rep_x = this.find(x)
        let rep_y = this.find(y) 
        if(rep_x == rep_y) {
            return
        }

        if(this.rank[rep_x] < this.rank[rep_y]) {
            this.parent[rep_x] = rep_y
        } else if( this.rank[rep_y] < this.rank[rep_x]) {
            this.parent[rep_y] = rep_x
        } else {
            this.parent[rep_y] = rep_x
            this.rank[rep_x] += 1
        }
    }
}