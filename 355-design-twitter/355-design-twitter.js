
var Twitter = function() {
    this.counter = 0
    this.followersMap = new Map()
    this.followeesMap = new Map()
    this.tweets = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let currentTime = this.counter++
    let list = this.tweets.get(userId) || []
    list.push([tweetId, currentTime])
    this.tweets.set(userId, list)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    
    //console.log(this.followeesMap, this.followersMap, userId, this.tweets)
    let followedUsers = this.followeesMap.get(userId) ? Array.from(this.followeesMap.get(userId)) : []
    let tweets = this.tweets.get(userId) ? this.tweets.get(userId).slice() : []
    for(let user of followedUsers) {
        tweets.push(...(this.tweets.get(user) || []) )
    }
    //console.log("tweets => ", tweets)
    tweets.sort(function(a,b) {
        //return b[1] - a[1]
        if(a[1] > b[1]) {
            return -1
        } else if(a[1] < b[1]) {
            return 1
        }
        return 0
    })
    //console.log("tweets => ", tweets) 
    
    let top10 = []
    for(let i = 0; i < Math.min(10, tweets.length); i++) {
        top10.push(tweets[i][0])
    }
    //console.log("top10 =>", top10)
    return top10
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    
    if(this.followersMap.has(followeeId) == false) {
        this.followersMap.set(followeeId, new Set())
    }
    
    if(this.followeesMap.has(followerId) == false) {
        this.followeesMap.set(followerId, new Set())
    }
    
    this.followersMap.get(followeeId).add(followerId)
    this.followeesMap.get(followerId).add(followeeId)
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.followersMap.get(followeeId) ?  this.followersMap.get(followeeId).delete(followerId) : ""
    this.followeesMap.get(followerId) ? this.followeesMap.get(followerId).delete(followeeId) : ""
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */