/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    let smap = new Map();
    let tmap = new Map();
    for(let ch of t) {
        tmap.set(ch, (tmap.get(ch) || 0) + 1);
    }
    
    let isAllLettersCovered = () => {
        //console.log(smap, tmap)
        for(let ch of tmap.keys()) {
            if(smap.has(ch) && smap.get(ch) > 0 && smap.get(ch) >= tmap.get(ch)) {
                continue;
            } else {
                //console.log(ch, smap, tmap, false);
                return false;
            }
        }
        //console.log(smap, tmap, true);
        return true;
    }
    
    let p1 = 0, p2 = 0;
    let a = -Infinity , b = Infinity;
    while(p2 < s.length) {
        smap.set(s[p2], (smap.get(s[p2]) || 0) + 1);
        //console.log(smap)
        while(isAllLettersCovered()) {
            //console.log(p1,p2)
            if(p2 - p1 < b - a) {
                a = p1;
                b = p2;
            }
            smap.set(s[p1], (smap.get(s[p1]) || 0) - 1);
            p1++;
        }
        p2++;
    }
    //console.log(p1, p2, a,b, smap);
    if(a != -Infinity && b != Infinity) {
        return s.substring(a, b+1);
    }
    return "";
};