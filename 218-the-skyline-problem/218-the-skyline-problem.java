class Solution {
    public List<List<Integer>> getSkyline(int[][] buildings) {
        // Collect and sort the unique positions of all the edges.
        SortedSet<Integer> edgeSet = new TreeSet<Integer>();
        for (int[] building : buildings) {
            int left = building[0], right = building[1];
            edgeSet.add(left);
            edgeSet.add(right);
        }
        List<Integer> positions = new ArrayList<Integer>(edgeSet);
        Collections.sort(positions);
        
        // 'answer' for skyline key points.
        List<List<Integer>> answer = new ArrayList<>();
        int maxHeight, left, right, height;
        
        // For each position, draw an imaginary vertical line.
        for (int position : positions) {
            // The current max height.
            maxHeight = 0;
            
            // Iterate over all the buildings:
            for (int[] building : buildings) {
                left = building[0];
                right = building[1];
                height = building[2];
                
                // If the current building intersects with the line,
                // update 'maxHeight'.
                if (left <= position && position < right) {
                    maxHeight = Math.max(maxHeight, height);
                }
            }
            
            // If its the first key point or the height changes, 
            // we add [position, maxHeight] to 'answer'.
            if (answer.isEmpty() || answer.get(answer.size() - 1).get(1) != maxHeight) {
                answer.add(Arrays.asList(position, maxHeight));
            }
        }
        
        // Return 'answer' as the skyline.
        return answer;
    }
}