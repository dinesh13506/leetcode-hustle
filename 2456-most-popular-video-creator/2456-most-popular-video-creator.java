class Creator {
    public long views = 0;
    public int videoViews = 0;
    public String videoId = "";
    public Creator(int views, String videoId) {
        this.views = (long) views;
        this.videoViews = views;
        this.videoId = videoId;
    }
    public void update(int views, String videoId) {
        this.views = this.views + (long) views;
        if(views > this.videoViews) {
            this.videoViews = views;
            this.videoId = videoId;
        } else if(views == this.videoViews) {
            if(videoId.compareTo(this.videoId) < 0) {
                this.videoId = videoId;
            }
        }
    }
    
    public String toString() {
        return this.views + "  " + this.videoViews + "   " + this.videoId;
    }
    
}

class Solution {
    public List<List<String>> mostPopularCreator(String[] creators, String[] ids, int[] views) {
        List<List<String>> ans = new ArrayList<>();
        HashMap<String, Creator> map = new HashMap<String, Creator>();
        final int n = creators.length;
        long highest = 0;
        for(int i = 0; i < n; i++) {
            String name = creators[i];
            String vid = ids[i];
            int viewCount = views[i];
            if(map.get(name) == null) {
                Creator obj = new Creator(viewCount, vid);
                map.put(name, obj);
            } else {
                Creator obj = map.get(name);
                obj.update(viewCount, vid);
            }
            highest = Math.max(highest, map.get(name).views);
        }
        //System.out.println(highest);
        for(String name : map.keySet()) {
            //System.out.println(map.get(name));
            if(map.get(name).views == highest) {
                Creator obj = map.get(name);
                ArrayList<String> data = new ArrayList<String>();
                data.add(name);
                data.add(obj.videoId);
                ans.add(data);
            }
        }
        
        return ans;
    }
}