/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISMemo = function(nums) {
    let n = nums.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(n+1)
        memo[i].fill(-1)
    }
    let dp = function(index, prevIndex) {
        
        if(index == n) {
            return 0
        }
        if(memo[index][prevIndex+1] != -1) {
            return memo[index][prevIndex+1]
        }
        //nottake
        let nottake = 0 + dp(index+1, prevIndex)
        let take = 0
        if(prevIndex == -1 || nums[prevIndex] < nums[index]) {
            take = 1 + dp(index+1, index)
        }
        memo[index][prevIndex+1] = Math.max(nottake, take)
        return memo[index][prevIndex+1]
    }
    
    return dp(0, -1)
};



var lengthOfLISBottomUp = function(nums) {
    let n = nums.length
    let dp = new Array(n+1)
    for(let i = 0; i <= n; i++) {
        dp[i] = new Array(n+1)
        dp[i].fill(0)
    }
    
    for(let i = n-1; i >=0; i--) {
        for(let previ = i-1; previ >= -1; previ--) {
            
            let notake = 0 + dp[i+1][previ+1]
            let take = 0
            if(previ == -1 || nums[previ] < nums[i]) {
                take = 1 + dp[i+1][i+1]
            }
            dp[i][previ+1] = Math.max(take, notake)
        }
    }
    
    return dp[0][0]
};


var lengthOfLISSpaceOptimisation = function(nums) {
    let n = nums.length
    let next = new Array(n+1)
    next.fill(0)
    
    for(let i = n-1; i >=0; i--) {
        let curr = new Array(n+1)
        curr.fill(0)
        for(let previ = i-1; previ >= -1; previ--) {
            
            let notake = 0 + next[previ+1]
            let take = 0
            if(previ == -1 || nums[previ] < nums[i]) {
                take = 1 + next[i+1]
            }
            curr[previ+1] = Math.max(take, notake)
        }
        next = curr
    }
    
    return next[0]
};


var lengthOfLISTimeTaking = function(nums) {
    let n = nums.length
    let dp = new Array(n)
    dp.fill(1)
    let lis = 1
    for(let i = 0; i < n; i++) {
        for(let prev = 0; prev <= i-1; prev++) {
            if(nums[prev] < nums[i]) {
                dp[i] = Math.max(dp[i], 1+ dp[prev])
                lis = Math.max(lis, dp[i])
            }
        }
    }
    
    return lis
};


var lengthOfLISPrint = function(nums) {
    let n = nums.length
    let dp = new Array(n)
    dp.fill(1)
    let lis = new Array(n)
    for(let i = 0; i < n; i++) {
        lis[i] = []
        lis[i].push(nums[i])
    }
    for(let i = 0; i < n; i++) {
        for(let prev = 0; prev <= i-1; prev++) {
            if(nums[prev] < nums[i]) {
                if(dp[i] < 1 + dp[prev]) {
                    dp[i] = Math.max(dp[i], 1+ dp[prev])
                    lis[i].unshift(nums[prev])
                }
            }
        }
    }
    //console.log(lis)
    let ans = 1
    for(let i = 0; i < n; i++) {
        ans = Math.max(ans, lis[i].length)
    }
    
    return ans
};


var lengthOfLIS = function(nums) {
    let n = nums.length
    let dp = new Array(n)
    let temp = []
    
    //find index where target is found or just greater value is found
    let lowerBound = function(target) {
        let start = 0, end = temp.length - 1, ans = -1
        while(start <= end) {
            let mid = parseInt((start + end) / 2)
            if(temp[mid] === target) {
                ans = mid
                break
            } else if(target < temp[mid]) {
                ans = mid
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return ans
    }
    
    let len = 0
    temp.push(nums[0])
    len++
    for(let i = 1; i < n; i++) {
        
        if(nums[i] > temp[temp.length-1]) {
            temp.push(nums[i])
            len++
        } else {
            let idx = lowerBound(nums[i])
            temp[idx] = nums[i]
        }
    }
    
    return len
};