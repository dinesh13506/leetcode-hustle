class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        List<String> ans = new ArrayList<String>();
        HashMap<String, Integer> freq = new HashMap<String, Integer>();
        PriorityQueue<String> pq = new PriorityQueue<String>((a,b) -> {
            if(freq.get(a) < freq.get(b)) {
                return 1;
            } else if(freq.get(a) > freq.get(b)) {
                return -1;
            } else {
                return a.compareTo(b);
            }
        });
        final int n = words.length;
        for(int i = 0; i < n; i++) {
            freq.put(words[i], freq.getOrDefault(words[i], 0 ) + 1);
        }
        //System.out.println(freq);
        
        for(String w : freq.keySet()) {
            pq.add(w);
        }
        
        while(pq.isEmpty() == false && k > 0) {
            ans.add(pq.poll());
            k--;
        }
        return ans;
    }
}