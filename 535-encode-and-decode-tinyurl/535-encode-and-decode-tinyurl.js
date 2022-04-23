let MyHash = function() {
    this.alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 62 char
    this.map = new Map()
    this.hashLength = 10
}

MyHash.prototype.getRandom = function() {
    return Math.floor(Math.random() * this.hashLength); // 0 - 9
}

MyHash.prototype.getHashCode = function() {
    let shortUrl = []
    for(let i = 0; i < this.hashLength; i++) {
        let index = this.getRandom()
        shortUrl.push(this.alphabet[index])
    }
    return shortUrl.join('')
}



/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let myhash = new MyHash()
var encode = function(longUrl) {
    let hashCode = myhash.getHashCode()
    while(myhash.map.has(hashCode)) {
        hashCode = myhash.getHashCode()
    }
    myhash.map.set(hashCode,longUrl)
    return "http://tinyurl.com/" + hashCode
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let hashCode = shortUrl.replace("http://tinyurl.com/","")
    return myhash.map.get(hashCode)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */