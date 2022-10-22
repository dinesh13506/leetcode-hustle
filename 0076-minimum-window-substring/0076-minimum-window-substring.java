class Solution {
    public HashMap<Character, Integer> smap;
    public HashMap<Character, Integer> tmap;
    public boolean isPossible() {
        for(char ch : tmap.keySet()) {
            if(smap.containsKey(ch) && smap.get(ch) > 0 && smap.get(ch) >= tmap.get(ch) ) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
    
    public String minWindow(String s, String t) {
        smap = new HashMap<Character, Integer>();
        tmap = new HashMap<Character, Integer>();
        for(int i = 0; i < t.length(); i++) {
            char ch = t.charAt(i);
            tmap.put(ch, tmap.getOrDefault(ch, 0) + 1);
        }
        
        //System.out.println(tmap);
        int p1 = 0, p2 = 0;
        int a = 0;
        int b = 100001;
        boolean found  = false;
        while(p2 < s.length()) {
            char ch = s.charAt(p2);
            smap.put(ch, smap.getOrDefault(ch , 0) + 1);
            while(isPossible() == true) {
                //System.out.println(smap + " hey" + p1 + " " + p2);
                if(p2 - p1 <= b - a) {
                    a = p1;
                    b = p2;
                    found = true;
                }
                smap.put(s.charAt(p1), smap.getOrDefault(s.charAt(p1) , 0) - 1);
                p1++;
            }
            p2++;
        }
        
        //System.out.println(a + " " + b);
        if(!found) {
            return "";
        }
        return s.substring(a,b+1);
        
    }
}