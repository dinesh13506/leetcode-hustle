/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    s = s.split('').sort((a,b) => { return a.charCodeAt() - b.charCodeAt()}).join('')
    
    t = t.split('').sort((a,b) => { return a.charCodeAt() - b.charCodeAt()}).join('')
    
    return s == t
    
    
};