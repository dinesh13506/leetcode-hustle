class Solution {
    public boolean isValidSudoku(char[][] board) {
        int m = board.length, n = board[0].length;
        
        //check each row
        for(int r = 0; r < m; r++) {
            Set<Character> set = new HashSet<Character>();
            for(int c = 0; c < n; c++) {
                char ch = board[r][c];
                if(ch == '.') {
                    continue;
                }
                if(set.contains(ch)) {
                    return false;
                }
                set.add(ch);
            }
        }
        
        //check each column
        for(int c = 0; c < n; c++) {
            Set<Character> set = new HashSet<Character>();
            for(int r = 0; r < m; r++) {
                char ch = board[r][c];
                if(ch == '.') {
                    continue;
                }
                if(set.contains(ch)) {
                    return false;
                }
                set.add(ch);
            }
        }
        
        for(int i = 0; i < m; i = i + 3) {
            for(int j = 0; j < n; j = j + 3) {
                Set<Character> set = new HashSet<Character>();
                for(int r = i; r < i + 3; r++) {
                    for(int c = j; c < j + 3; c++) {
                        char ch = board[r][c];
                        if(ch == '.') {
                            continue;
                        }
                        if(set.contains(ch)) {
                            return false;
                        }
                        set.add(ch);
                    }
                }
            }
        }
        return true;
    }
}