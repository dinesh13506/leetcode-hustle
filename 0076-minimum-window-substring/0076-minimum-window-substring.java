class Solution {
    public String minWindow(String s, String t) {

        if (s.length() == 0 || t.length() == 0) {
            return "";
        }

        Map<Character, Integer> tmap = new HashMap<Character, Integer>();
        for (int i = 0; i < t.length(); i++) {
            int count = tmap.getOrDefault(t.charAt(i), 0);
            tmap.put(t.charAt(i), count + 1);
        }

        int required = tmap.size();

        int l = 0, r = 0;
        int formed = 0;
        Map<Character, Integer> smap = new HashMap<Character, Integer>();
        int[] ans = { -1, 0, 0 };

        while (r < s.length()) {
            char c = s.charAt(r);
            int count = smap.getOrDefault(c, 0);
            smap.put(c, count + 1);
            if (tmap.containsKey(c) && smap.get(c).intValue() == tmap.get(c).intValue()) {
                formed++;
            }

            while (l <= r && formed == required) {
                c = s.charAt(l);
                // Save the smallest window until now.
                if (ans[0] == -1 || r - l + 1 < ans[0]) {
                    ans[0] = r - l + 1;
                    ans[1] = l;
                    ans[2] = r;
                }
                smap.put(c, smap.get(c) - 1);
                if (tmap.containsKey(c) && smap.get(c) < tmap.get(c)) {
                    formed--;
                }
                l++;
            }
            r++;
        }

        return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1);
    }
}