
var Twitter = function() {
    this.followerMap = new Map()
    this.followingMap = new Map()
    this.tweetMap = new Map()
    this.time = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let tweets = this.tweetMap.get(userId) || []
    this.time++
    tweets.push([tweetId, this.time])
    this.tweetMap.set(userId, tweets)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let ids = [userId]
    let follwing = this.followingMap.get(userId) || []
    for(let id of follwing) {
        ids.push(id)
    }
    let tweets = []
    for(let id of ids) {
        tweets.push(...(this.tweetMap.get(id) || []))
    }
    tweets.sort(function(a,b) {
        return b[1] - a[1]
    })
    let set = new Set()
    for(let t of tweets) {
        set.add(t)
    }
    tweets = Array.from(set)
    
    let top10 = []
    for(let i = 0; i < Math.min(10, tweets.length); i++) {
        top10.push(tweets[i][0])
    }
    return top10
    
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    let followers = this.followerMap.get(followeeId) || []
    followers.push(followerId)
    this.followerMap.set(followeeId, followers)
    
    let following = this.followingMap.get(followerId) || []
    following.push(followeeId)
    this.followingMap.set(followerId, following)
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    let following = this.followingMap.get(followerId) || []
    following = following.filter(function(id) { return id != followeeId })
    this.followingMap.set(followerId, following)
    
    let followers = this.followerMap.get(followeeId) || []
    followers.filter(function(id) { return id != followerId })
    this.followerMap.set(followeeId, followers)
    
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */