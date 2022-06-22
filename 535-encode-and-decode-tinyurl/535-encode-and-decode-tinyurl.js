class MyHash {
    constructor() {
        this.chars ='abcdefghijklmnopqrswxyzABCDEFGHIJKLMNOPQRSTUV0123456789+/'
        this.map = new Map()
        this.shortUrlLen = 8
    }
    
    encode(url) {
        if(this.map.has(url)) {
            return this.map.get(url)
        }
        let foundUnique = false
        let encoded = []
        while(foundUnique == false) {
            for(let i = 0; i < this.shortUrlLen; i++) {
                let rand = Math.random()
                let index = Math.floor(rand * this.chars.length)
                encoded.push(this.chars[index])
            }
            let shorturl = encoded.join('')
            if(this.map.has(shorturl) == false) {
                this.map.set(url, shorturl)
                this.map.set(shorturl, url)
                foundUnique = true
            }
        }
        return this.map.get(url)
    }
    
    decode(shorturl) {
        return this.map.get(shorturl)
    }
}

let myhash = new MyHash()
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    return myhash.encode(longUrl)
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return myhash.decode(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */