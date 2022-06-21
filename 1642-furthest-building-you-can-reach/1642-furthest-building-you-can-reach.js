const minHeap = () => {
    const data = [];
    
    const size = () => {
      return data.length;  
    };
    
    const bottomUp = (index) => {
        
        if(size() <= 1) return;
        
        const parenti = Math.floor((index - 1) / 2);
        if(data[parenti] > data[index]){
            [data[parenti], data[index]] = [data[index], data[parenti]];
            bottomUp(parenti);   
        }
    };
    
    const topDown = (index) => {
       
        const n = size();
        
        let smaller = index;
        let lefti = 2*index + 1;
        let righti = lefti + 1;
        
        if(lefti < n && data[lefti] < data[smaller]){
            smaller = lefti;
        }
        
        if(righti < n && data[righti] < data[smaller]){
            smaller = righti;
        }
        
        if(index !== smaller){
            [data[index], data[smaller]] = [data[smaller], data[index]];
            topDown(smaller);
        }
    };
    
    const add = (val) => {
        data.push(val);
        bottomUp(data.length - 1);
    };
    
    const poll = () => {
        if(size() <= 0) return null;
        
        const min = data[0];
        
        data[0] = data[size() - 1];
        data.pop();
        topDown(0);
        
        return min;
    };
    
    const peek = () => {
      return size() > 0 ? data[0] : null;  
    };
    
    return {
        add,
        poll,
        peek,
        size,
    }
};

/**
 * Time: O(NlogN)
 * Space: O(N)
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length;
    
    const heap = minHeap();
    
    for(let i=0; i<n-1; i++){
        
        const currentHeight = heights[i];
        const nextHeight = heights[i + 1];
        
        // it's a jump down
        if(currentHeight >= nextHeight) continue;
           
        const diff = nextHeight - currentHeight; 
        heap.add(diff);
        
        if(heap.size() <= ladders) continue;
        
        // use the minimal number of bricks
        const minDifference = heap.peek();
        bricks -= minDifference;
        heap.poll();
        
        if(bricks < 0) return i;
    }
    
    // we can reach all heights
    return n - 1;
};